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
exports.OrderController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const midtransClient = require("midtrans-client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class OrderController {
    createOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const customerId = 1;
                const { totalPrice, finalPrice, orderCart } = req.body;
                const expiredAt = new Date(new Date().getTime() + 10 * 60 * 1000);
                const { id } = yield prisma_1.default.order.create({
                    data: { customerId: customerId, totalPrice, finalPrice, expiredAt },
                });
                for (const order of orderCart) {
                    yield prisma_1.default.orderDetail.create({
                        data: {
                            orderId: id,
                            ticketId: order.ticket.id,
                            quantity: order.quantity,
                            subTotalPrice: order.quantity * order.ticket.price,
                        },
                    });
                    yield prisma_1.default.ticket.update({
                        data: { quantity: { decrement: order.quantity } },
                        where: { id: order.ticket.id },
                    });
                }
                res
                    .status(201)
                    .send({ message: "Order created successfully", orderId: id });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    getOrderDetail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const order = yield prisma_1.default.order.findUnique({
                    where: { id: +req.params.orderId },
                    select: {
                        totalPrice: true,
                        finalPrice: true,
                        status: true,
                        expiredAt: true,
                        OrderDetail: {
                            select: {
                                quantity: true,
                                subTotalPrice: true,
                                ticket: {
                                    select: {
                                        category: true,
                                        price: true,
                                        event: {
                                            select: {
                                                title: true,
                                                date: true,
                                                venue: true,
                                                location: true,
                                                startTime: true,
                                                endTime: true,
                                                image: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                });
                res.status(200).send({ order });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    getOrderToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const snap = new midtransClient.Snap({
                    isProduction: false,
                    serverKey: `${process.env.MIDTRANS_SERVER_KEY}`,
                });
                const parameter = {
                    transaction_details: req.body,
                };
                const order = yield snap.createTransaction(parameter);
                const orderToken = order.token;
                res.status(201).send({ token: orderToken });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
}
exports.OrderController = OrderController;
