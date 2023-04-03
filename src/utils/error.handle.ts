import { Response } from "express";

export const handleHttpError = (
  res: Response,
  errorMsg: string,
  code: number = 301
) => {
  res.status(code);
  res.send({ errorMsg });
};
