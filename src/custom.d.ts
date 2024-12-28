import { Customer } from "../prisma/generated/client";
import { Request } from "express";
import "express";

export type mixPayload = {
  id: number;
  role: "customer" | "organizer";
};

export type OrganizerPayload = {
  id: string;
};

declare global {
  namespace Express {
    export interface Request {
      user?: mixPayload;
      // organizer?: OrganizerPayload;
    }
  }
}
