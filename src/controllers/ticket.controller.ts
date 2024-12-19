import { Request, Response } from "express";
import prisma from "../prisma";

export class TicketController {
  async createTicket(req: Request, res: Response) {
    try {
      const { category, description, price, quantity } = req.body;

      const eventId = req.params.eventId;
      console.log(req.params);

      await prisma.ticket.create({
        data: {
          category,
          description,
          price,
          quantity,
          eventId: eventId,
        },
      });
      res.status(201).send({ message: "Ticket created successfully" });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async getTickets(req: Request, res: Response) {
    try {
      const eventId = req.params.eventId;
      const tickets = await prisma.ticket.findMany({
        select: {
          id: true,
          category: true,
          description: true,
          price: true,
          quantity: true,
          event: {
            select: {
              title: true,
            },
          },
        },
        where: { eventId: eventId },
      });
      res.status(200).send({ tickets });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
}
