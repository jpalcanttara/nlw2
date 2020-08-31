import jwt from "jsonwebtoken";
import { secret } from "../config/auth";
import { Request, Response, NextFunction } from "express";

export const Autorization = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ message: "No token provided" });
  }

  const [scheme, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token, secret);

    next();
  } catch (error) {
    return response.status(401).json({ message: "Token Inválido" });
  }
};
