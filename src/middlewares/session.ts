import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers["authorization"]?.split(" ").pop();
    if (!token) {
      res
        .status(401)
        .send(
          "You have to send a Bearer Token -in headers- to access this resource "
        );
    }

    const isValidToken = verifyToken(`${token}`);

    if (isValidToken) {
      next();
    } else {
      res
        .status(401)
        .send("You don't have permissions to access this resource");
    }
  } catch (error) {
    res.status(401).send("You don't have permissions to access this resource");
  }
};

export { checkJwt };
