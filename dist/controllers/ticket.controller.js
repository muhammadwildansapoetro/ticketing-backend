"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class TicketController {
    createTicket(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { category, description, price, quantity } = req.body;
                const eventId = req.params.eventId;
                console.log(req.params);
                yield prisma_1.default.ticket.create({
                    data: {
                        category,
                        description,
                        price,
                        quantity,
                        eventId: eventId,
                    },
                });
                res.status(201).send({ message: "Ticket created successfully" });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    getTickets(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const eventId = req.params.eventId;
                const tickets = yield prisma_1.default.ticket.findMany({
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
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
}
exports.TicketController = TicketController;
