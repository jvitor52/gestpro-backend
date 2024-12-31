import { NextFunction, Request, Response } from 'express';
import prisma from '../configs/prisma.config';

export default async function RequestLogMiddleware(
  request: Request,
  _: Response,
  next: NextFunction
) {
  try {
    await prisma.log.create({
      data: {
        method: request.method,
        status: String(request.statusCode) || '',
        // uid_user: request.user?.id,
        payload: JSON.stringify(request.body).substring(0, 10000),
        request_path: request.path,
      },
    });
  } finally {
    next();
  }
}
