import { NextFunction, Request, Response } from "express";
import type { ErrorRequestHandler } from "express";

interface ResponseError extends Error {
    status?: number;
  }

const errorHandler:ErrorRequestHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode).json({Message: err.message,
    Stack: err.stack})
}

export default errorHandler