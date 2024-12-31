class ErrorException extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class NotFoundException extends ErrorException {
  constructor(message: string) {
    super(message, 404);
  }
}

export class BadRequestException extends ErrorException {
  constructor(message: string) {
    super(message, 400);
  }
}

export class UnauthorizedException extends ErrorException {
  constructor(message: string) {
    super(message, 401);
  }
}

export class ConflictException extends ErrorException {
  constructor(message: string) {
    super(message, 409);
  }
}

export class UnexpectedException extends ErrorException {
  constructor(message: string) {
    super(message, 500);
  }
}
