import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users.interfaces";
import { loginService } from "../services/login/login.service";

export const loginController = async (req: Request, res: Response) => {
  const loginInformation: IUserLogin = req.body;
  const data = await loginService(loginInformation);
  res.json(data);
};
