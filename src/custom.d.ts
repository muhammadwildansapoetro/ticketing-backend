import { Customer } from "@prisma/client";
import { Request } from "express";
import 'express';

export type CustomerPayload = {
    id: number;
    role: RoleUser;
};

export type OrganizerPayload= {
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