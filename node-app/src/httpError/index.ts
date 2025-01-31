export enum HTTPErrorCode {
    Forbidden = 403,
    Unauthorized = 401,
    NotFound = 404,
    BadRequest = 400,
    InternalServerError = 500,
  }
  
  export abstract class BaseError {
    protected httpStatus!: number;
    protected mesage!: string;
  
    constructor(httpStatus = HTTPErrorCode.InternalServerError, message = "Internal Server Error.") {
      this.httpStatus = httpStatus;
      this.mesage = message;
      console.error(message);
    }
    abstract getHttpStatus(): number;
    abstract getMessage(): string;
  }
  
  export class ErrorForbidden extends BaseError {
    constructor(httpStatus: number, message: string) {
      super(httpStatus, message);
    }
  
    getHttpStatus(): number {
      return this.httpStatus;
    }
  
    getMessage(): string {
      return this.mesage;
    }
  }
  
  export class ErrorUnauthorized extends BaseError {
    constructor(httpStatus: number, message: string) {
      super(httpStatus, message);
    }
  
    getHttpStatus(): number {
      return this.httpStatus;
    }
  
    getMessage(): string {
      return this.mesage;
    }
  }
  
  export class ErrorNotFound extends BaseError {
    constructor(httpStatus: number, message: string) {
      super(httpStatus, message);
    }
  
    getHttpStatus(): number {
      return this.httpStatus;
    }
  
    getMessage(): string {
      return this.mesage;
    }
  }
  
  export class ErrorBadRequest extends BaseError {
    constructor(httpStatus: number, message: string) {
      super(httpStatus, message);
    }
  
    getHttpStatus(): number {
      return this.httpStatus;
    }
  
    getMessage(): string {
      return this.mesage;
    }
  }
  
  export class InternalServerError extends BaseError {
    constructor(httpStatus: number, message: string) {
      super(httpStatus, message);
    }
  
    getHttpStatus(): number {
      return this.httpStatus;
    }
  
    getMessage(): string {
      return this.mesage;
    }
  }
  