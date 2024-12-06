import { Request, Response, NextFunction } from "express";
import { iJWTDecoded } from "../interfaces/jwt.interfaces";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../errors";

export const ensureAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let token: string | undefined = req.headers.authorization;

  if (!token) {
    res.status(401).json({
      message: "Invalid token",
    });
    return;
  }

  token = token.split(" ")[1];

  jwt.verify(
    token,
    process.env.SECRET_KEY as string,
    (error, decoded: iJWTDecoded | undefined) => {
      if (error) {
        next(new AppError(error.message, 401));
        return;
      }

      if (decoded) {
        req.user = {
          id: decoded.sub,
          isAdmin: decoded.isAdmin,
        };
      }

      next();
    }
  );
};
