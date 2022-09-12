import { ErrorRequestHandler, Request, Response } from "express";

const errorHandler = (err:any, res: Response, req:Request) => {
    const statusCode = req.statusCode ? res.statusCode : 500;
    res.status(statusCode);

    res.json({Message: err.message,
    Stack: err.stack})
}

export {
    errorHandler
}