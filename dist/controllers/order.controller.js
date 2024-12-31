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
            var _a;
            try {
                const customerId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                const { totalPrice, finalPrice, orderCart } = req.body;
                const expiredAt = new Date(new Date().getTime() + 10 * 60 * 1000);
                console.log("customer ID:", customerId);
                const { id } = yield prisma_1.default.order.create({
                    data: { customerId: customerId, totalPrice, finalPrice, expiredAt },
                });
                const currentDate = new Date();
                for (const order of orderCart) {
                    const ticket = yield prisma_1.default.ticket.findUnique({
                        where: { id: order.ticket.id },
                    });
                    if (!ticket) {
                        throw new Error(`Ticket with ID ${order.ticket.id} not found`);
                    }
                    const hasDiscount = ticket.discountPercentage && ticket.discountPercentage > 0;
                    const discountStartDate = ticket.discountStartDate
                        ? new Date(ticket.discountStartDate)
                        : null;
                    const discountEndDate = ticket.discountEndDate
                        ? new Date(ticket.discountEndDate)
                        : null;
                    const isDiscountActive = currentDate >= discountStartDate && currentDate <= discountEndDate;
                    const pricePerTicket = isDiscountActive && hasDiscount
                        ? ticket.price - (ticket.price * ticket.discountPercentage) / 100
                        : ticket.price;
                    const subTotalPrice = pricePerTicket * order.quantity;
                    yield prisma_1.default.orderDetail.create({
                        data: {
                            orderId: id,
                            ticketId: order.ticket.id,
                            quantity: order.quantity,
                            subTotalPrice: subTotalPrice,
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
                        customerId: true,
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
            var _a;
            try {
                const { order_id } = req.body;
                const item_details = [];
                const activeOrder = yield prisma_1.default.order.findUnique({
                    where: { id: order_id },
                    select: { status: true, expiredAt: true },
                });
                if ((activeOrder === null || activeOrder === void 0 ? void 0 : activeOrder.status) === "Canceled")
                    throw "Order canceled due to unpaid payment within 10 minutes.";
                const orderExpireMinute = Math.ceil((new Date(activeOrder.expiredAt).getTime() - new Date().getTime()) /
                    60000);
                const orderDetail = yield prisma_1.default.orderDetail.findMany({
                    where: { orderId: order_id },
                    include: {
                        ticket: {
                            select: { category: true },
                        },
                    },
                });
                const customer = yield prisma_1.default.customer.findUnique({
                    where: { id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id },
                });
                for (const ticket of orderDetail) {
                    item_details.push({
                        id: ticket.ticketId.toString(),
                        name: ticket.ticket.category + " Stand",
                        price: ticket.subTotalPrice / ticket.quantity,
                        quantity: ticket.quantity,
                    });
                }
                const snap = new midtransClient.Snap({
                    isProduction: false,
                    serverKey: `${process.env.MIDTRANS_SERVER_KEY}`,
                });
                console.log("req body:", req.body);
                const parameter = {
                    transaction_details: {
                        order_id: order_id.toString(),
                        gross_amount: req.body.gross_amount,
                    },
                    customer_details: {
                        first_name: customer === null || customer === void 0 ? void 0 : customer.fullname,
                        email: customer === null || customer === void 0 ? void 0 : customer.email,
                    },
                    item_details: item_details,
                    expiry: {
                        unit: "minutes",
                        duration: orderExpireMinute,
                    },
                };
                const order = yield snap.createTransaction(parameter);
                console.log("Midtrans response:", order);
                res.status(200).send({ orderToken: order.token });
            }
            catch (error) {
                console.log("Error get order token:", error);
                res
                    .status(400)
                    .send({ error: "Failed to create transaction", details: error });
            }
        });
    }
    updateOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { transaction_status, order_id } = req.body;
                const orderStatus = transaction_status === "settlement"
                    ? "Paid"
                    : transaction_status === "pending"
                        ? "Unpaid"
                        : "Canceled";
                yield prisma_1.default.order.update({
                    where: { id: +order_id },
                    data: { status: orderStatus },
                });
                res.status(200).send({ message: "Order status updated successfully" });
            }
            catch (error) {
                console.log("Error update order:", error);
                res.status(400).send(error);
            }
        });
    }
}
exports.OrderController = OrderController;
