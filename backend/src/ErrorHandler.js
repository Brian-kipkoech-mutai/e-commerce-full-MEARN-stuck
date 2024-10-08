
//extends  the native arror object with the custom  error handler

class ErrorHandler extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}
export default ErrorHandler;



