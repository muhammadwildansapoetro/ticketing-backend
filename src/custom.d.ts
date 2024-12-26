<<<<<<< HEAD
import { Customer } from "@prisma/client";
import { Request } from "express";
import 'express';

export type CustomerandOrganizerPayload = {
    id: number;
    role: "customer" | "organizer";
};

export type OrganizerPayload= {
    id: number;
    // role: "organizer"


};

declare global {
    namespace Express {
        export interface Request {
            mix?: CustomerandOrganizerPayload;
            organizer?: OrganizerPayload; 
        }
    }
}
=======
import { Customer } from "../prisma/generated/client";
import { Request } from "express";
import "express";

export type CustomerPayload = {
  id: number;
  role: RoleUser;
};

export type OrganizerPayload = {
  id: string;
};

declare global {
  namespace Express {
    export interface Request {
      customer?: CustomerPayload;
      organizer?: OrganizerPayload;
    }
  }
}
>>>>>>> 59a595c96f5f450c34ea53b287e24bb8428e8a06
