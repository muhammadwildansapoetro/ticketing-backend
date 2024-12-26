"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketRouter = void 0;
const express_1 = require("express");
const ticket_controller_1 = require("../controllers/ticket.controller");
class TicketRouter {
    constructor() {
        this.ticketController = new ticket_controller_1.TicketController();
        this.router = (0, express_1.Router)();
        this.initialiazeRoutes();
    }
    initialiazeRoutes() {
        this.router.post("/:eventId", this.ticketController.createTicket);
        this.router.get("/:eventId", this.ticketController.getTickets);
    }
    getRouter() {
        return this.router;
    }
}
exports.TicketRouter = TicketRouter;
