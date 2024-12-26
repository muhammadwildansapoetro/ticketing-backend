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