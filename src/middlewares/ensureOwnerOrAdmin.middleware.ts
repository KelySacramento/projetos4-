import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export const ensureOwnerOrAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userIdFromToken = req.user.id; // ID extracted from token in `ensureAuthMiddleware`
  const userIdFromParams = req.params.id; // ID passed in the request URL

  // Allow admins or users modifying their own data
  if (req.user.isAdmin || userIdFromToken === userIdFromParams) {
    return next();
  }

  throw new AppError("You are not authorized to modify this resource", 403);
};
