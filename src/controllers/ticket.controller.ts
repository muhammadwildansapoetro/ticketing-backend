import { Request, Response } from "express";
import prisma from "../prisma";

export class TicketController {
  async createTicket(req: Request, res: Response) {
    try {
      req.body.eventId = req.params.eventId;
      await prisma.ticket.create({
        data: req.body,
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
