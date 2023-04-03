import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";
import { handleHttpError } from "../utils/error.handle";

const loginUserCtrl = async (req: Request, res: Response) => {
  try {
    const responseUser = await loginUser(req.body);
    res.send(responseUser);
  } catch (error) {
    handleHttpError(res, `ERROR_LOGIN_USER: ${error}`, 202);
  }
};

const registerUserCtrl = async (req: Request, res: Response) => {
  try {
    const responseUser = await registerNewUser(req.body);
    res.send(responseUser);
  } catch (error) {
    handleHttpError(res, `ERROR_LOGIN_USER: ${error}`, 202);
  }
};

export { loginUserCtrl, registerUserCtrl };
