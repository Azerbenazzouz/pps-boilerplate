import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { CustomError } from '../utils/custom-error';

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      status: 'error',
      message: 'Validation error',
      errors: err.errors,
    });
  }

  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
};