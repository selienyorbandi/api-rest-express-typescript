import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("soy el logger");
  const header = req.headers;
  const userAgent = header["user-agent"];
  next();
};

export { logMiddleware };
