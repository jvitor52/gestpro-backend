import {
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
  ConflictException,
  UnexpectedException,
} from '../../exceptions/api.exception';

describe('Custom Exceptions', () => {
  describe('NotFoundException', () => {
    it('should create a NotFoundException with a custom message and status code 404', () => {
      const customMessage = 'Resource not found';
      const exception = new NotFoundException(customMessage);

      expect(exception).toBeInstanceOf(NotFoundException);
      expect(exception.message).toBe(customMessage);
      expect(exception.statusCode).toBe(404);
    });
  });

  describe('BadRequestException', () => {
    it('should create a BadRequestException with a custom message and status code 400', () => {
      const customMessage = 'Invalid request';
      const exception = new BadRequestException(customMessage);

      expect(exception).toBeInstanceOf(BadRequestException);
      expect(exception.message).toBe(customMessage);
      expect(exception.statusCode).toBe(400);
    });
  });

  describe('UnauthorizedException', () => {
    it('should create an UnauthorizedException with a custom message and status code 401', () => {
      const customMessage = 'Not authorized';
      const exception = new UnauthorizedException(customMessage);

      expect(exception).toBeInstanceOf(UnauthorizedException);
      expect(exception.message).toBe(customMessage);
      expect(exception.statusCode).toBe(401);
    });
  });

  describe('ConflictException', () => {
    it('should create a ConflictException with a custom message and status code 409', () => {
      const customMessage = 'Conflict occurred';
      const exception = new ConflictException(customMessage);

      expect(exception).toBeInstanceOf(ConflictException);
      expect(exception.message).toBe(customMessage);
      expect(exception.statusCode).toBe(409);
    });
  });

  describe('UnexpectedException', () => {
    it('should create an UnexpectedException with a custom message and status code 500', () => {
      const customMessage = 'Unexpected error occurred';
      const exception = new UnexpectedException(customMessage);

      expect(exception).toBeInstanceOf(UnexpectedException);
      expect(exception.message).toBe(customMessage);
      expect(exception.statusCode).toBe(500);
    });
  });
});
