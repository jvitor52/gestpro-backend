import { CelebrateError } from 'celebrate';
import { NextFunction, Request, Response } from 'express';
import middlewares from '../../middlewares/validations/user.middleware';

describe('User middlewares', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockNext = jest.fn();
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Partial<Response>;
  });

  describe('create middleware', () => {
    it('should pass validation with valid input', async () => {
      mockRequest = {
        body: {
          name: 'User',
          email: 'teste@teste.com.br',
          password: '12345678'
        },
      };

      await new Promise<void>((resolve) => {
        middlewares.create(
          mockRequest as Request,
          mockResponse as Response,
          (err) => {
            mockNext(err);
            resolve();
          }
        );
      });

      expect(mockNext).toHaveBeenCalled();
    });
  });

  describe('update middleware', () => {
    it('should return validation error if input is invalid', async () => {
      mockRequest = {
        params: { uid: '1' },
        body: {
          name: 'User',
          email: 'teste@teste.com.br',
          password: '12345678'
        },
      };

      await new Promise<void>((resolve) => {
        middlewares.update(
          mockRequest as Request,
          mockResponse as Response,
          (err) => {
            mockNext(err);
            resolve();
          }
        );
      });

      expect(mockNext).toHaveBeenCalledWith(expect.any(CelebrateError));
    });

    it('should pass validation with valid input', async () => {
      mockRequest = {
        params: { uid: '1' },
        body: {
          name: 'User',
          email: 'teste@teste.com.br',
          password: '12345678'
        },
      };

      await new Promise<void>((resolve) => {
        middlewares.update(
          mockRequest as Request,
          mockResponse as Response,
          (err) => {
            mockNext(err);
            resolve();
          }
        );
      });

      expect(mockNext).toHaveBeenCalled();
    });
  });

  describe('del middleware', () => {
    it('should return validation error if the id is not a number', async () => {
      mockRequest = {
        params: { uid: '1' },
      };

      await new Promise<void>((resolve) => {
        middlewares.del(
          mockRequest as Request,
          mockResponse as Response,
          (err) => {
            mockNext(err);
            resolve();
          }
        );
      });

      expect(mockNext).toHaveBeenCalledWith(expect.any(CelebrateError));
    });

    it('should pass validation with valid id', async () => {
      mockRequest = {
        params: { uid: '1' },
      };

      await new Promise<void>((resolve) => {
        middlewares.del(
          mockRequest as Request,
          mockResponse as Response,
          (err) => {
            mockNext(err);
            resolve();
          }
        );
      });

      expect(mockNext).toHaveBeenCalled();
    });
  });
});
