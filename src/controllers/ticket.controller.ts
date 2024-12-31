import { Request, Response } from "express";
import prisma from "../prisma";

export class TicketController {
  async createTicket(req: Request, res: Response) {
    try {
      const reqBody = {
        ...req.body,
        eventId: req.params.eventId,
        discountStartDate: new Date(req.body.discountStartDate),
        discountEndDate: new Date(req.body.discountEndDate),
      };
      await prisma.ticket.create({
        data: reqBody,
      });
      res.status(201).send({ message: "Ticket created successfully" });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async getTickets(req: Request, res: Response) {
    try {
      const tickets = await prisma.ticket.findMany({
        where: { eventId: req.params.eventId },
      });
      res.status(200).send({ tickets });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
}
