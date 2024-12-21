import { Router } from "express";
import { TicketController } from "../controllers/ticket.controller";

export class TicketRouter {
  private ticketController: TicketController;
  private router: Router;

  constructor() {
    this.ticketController = new TicketController();
    this.router = Router();
    this.initialiazeRoutes();
  }

  private initialiazeRoutes() {
    this.router.post("/:eventId", this.ticketController.createTicket);
    this.router.get("/:eventId", this.ticketController.getTickets);
  }

  getRouter(): Router {
    return this.router;
  }
}
