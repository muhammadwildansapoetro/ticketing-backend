import { Customer } from "../prisma/generated/client";
import { Request } from "express";
import "express";

export type UserPayload = {
  id: number;
  email: string
  avatar: string
  role: "customer" | "organizer";
};

declare global {
  namespace Express {
    export interface Request {
      user?: UserPayload;
    }
  }
}
