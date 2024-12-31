import { AxiosError } from 'axios';
import { CelebrateError } from 'celebrate';
import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'joi';
import prisma from '../configs/prisma.config';

export default async function ErrorHandlerMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Default error status code
  let statusCode = 500;

  // If the error has a specific status code, use that
  if (err.statusCode) {
    statusCode = err.statusCode;
  }

  const errors: { code: any; message: any }[] = [];

  switch (true) {
    case err instanceof AxiosError: {
      if (typeof err.response!.data === 'string') {
        errors.push({
          code: err.response?.status,
          message: err.response?.data,
        });
      } else {
        errors.push(...(err.response?.data.errors ?? []));
      }
      break;
    }
    // prisma not found error
    case /^no [\w]{1,} found$/gi.test(err.message): {
      statusCode = 404;
      errors.push({ code: 404, message: 'Resource not found' });
      break;
    }
    case err instanceof ValidationError:
      {
        statusCode = 400;
      }
      break;
    case err instanceof CelebrateError: {
      let data = {};

      const buildObjWithValue = (paths: string[], value = '') => {
        return paths.reduceRight(
          (acc, item, index) => ({
            [item]: index === paths.length - 1 ? value : acc,
          }),
          {}
        );
      };

      const isObject = (item: any) => {
        return item && typeof item === 'object' && !Array.isArray(item);
      };

      const mergeDeep = (target: any, source: any) => {
        const output = Object.assign({}, target);
        if (isObject(target) && isObject(source)) {
          Object.keys(source).forEach((key) => {
            if (isObject(source[key])) {
              if (!(key in target)) {
                Object.assign(output, { [key]: source[key] });
              } else {
                output[key] = mergeDeep(target[key], source[key]);
              }
            } else {
              Object.assign(output, { [key]: source[key] });
            }
          });
        }
        return output;
      };

      for (const [segment, joiError] of err.details.entries()) {
        joiError.details.forEach((err) => {
          const obj = buildObjWithValue(
            err.path.map((item) => item.toString()),
            err.message
          );
          data = mergeDeep(data, obj);
        });
      }

      await prisma.log.create({
        data: {
          method: req.method || '',
          status: '400',
          payload: JSON.stringify(req.body).substring(0, 10000) || '',
          request_path: req.path || '',
          response: JSON.stringify({
            [err.message]: data,
          }).substring(0, 10000),
        },
      });

      return next(err);
    }
    default: {
      errors.push({
        code: statusCode,
        message: err.message || 'Internal server error',
      });
      break;
    }
  }

  await prisma.log.create({
    data: {
      method: err.method || req.method,
      status: String(statusCode),
      // uid_user: req.user?.id,
      payload:
        JSON.stringify(err.body).substring(0, 10000) ||
        JSON.stringify(req.body).substring(0, 10000),
      request_path: err.path || req.path || '',
      response: JSON.stringify({
        error: err.message + ' Stack trace: ' + err.stack,
      }).substring(0, 10000),
    },
  });

  // Send an error response to the client
  res.status(statusCode).json({
    errors,
    ...(process.env.APP_ENV === 'local'
      ? { stackTrance: err.stack || '' }
      : {}),
  });
}
