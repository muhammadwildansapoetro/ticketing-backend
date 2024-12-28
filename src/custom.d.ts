import { Customer } from "../prisma/generated/client";
import { Request } from "express";
import "express";

export type mixCustomerandOrganizer = {
  id: number;
  role: "customer" | "organizer";
};

export type OrganizerPayload = {
  id: string;
};

declare global {
  namespace Express {
    export interface Request {
      mix?: mixCustomerandOrganizer;
      organizer?: OrganizerPayload;
    }
  }
}
