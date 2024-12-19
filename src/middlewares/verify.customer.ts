import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { CustomerPayload } from "../custom";

export const verifyTokenCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    const token = req.cookies?.token;
    if (!token) {
      throw { message: "Unauthorized!" };
    }

    // Verify the token
    const verifiedCustomer = verify(token, process.env.JWT_KEY!);
    req.customer = verifiedCustomer as CustomerPayload;

    next();
  } catch (err) {
    console.error("Token verification error:", err);
    res.status(401).json({ message: "Unauthorized!", error: err });
  }
};