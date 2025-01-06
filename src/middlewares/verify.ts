import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserPayload } from "../custom";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) throw { message: "Unauthorize" };

    const verifiedUser = verify(token, process.env.JWT_KEY!);

    req.user = verifiedUser as UserPayload;

    next();
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(401).send({ message: "Unauthorized: Invalid token" });
  }
};

export const organizerCheck = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user?.role === "organizer") {
    next();
  } else {
    res.status(400).send({ message: "Unauthorize, organizer only" });
  }
};

export const customerCheck = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user?.role === "customer") {
    next();
  } else {
    res.status(400).send({ message: "Unauthorize, customer only" });
  }
};




