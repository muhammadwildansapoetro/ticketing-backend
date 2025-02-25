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
                const { totalPrice, finalPrice, orderCart, customerCoupon, customerPoints, } = req.body;
                const expiredAt = new Date(new Date().getTime() + 10 * 60 * 1000);
                const currentDate = new Date();
                const order = yield prisma_1.default.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                    // Create Order
                    const order = yield tx.order.create({
                        data: { customerId, totalPrice, finalPrice, expiredAt },
                    });
                    // Fetch Customer Points within the transaction
                    const customerPointData = yield tx.customerPoint.findMany({
                        where: {
                            customerId,
                            expiredAt: { gte: currentDate },
                            isUsed: false,
                        },
                        select: { point: true },
                    });
                    const totalAvailablePoints = customerPointData.reduce((acc, point) => acc + point.point, 0);
                    // Process Tickets in Bulk
                    const orderDetails = [];
                    const ticketUpdates = [];
                    let totalSubTotalPrice = 0;
                    for (const orderItem of orderCart) {
                        const ticket = yield tx.ticket.findUnique({
                            where: { id: orderItem.ticket.id },
                        });
                        if (!ticket) {
                            throw new Error(`Ticket with ID ${orderItem.ticket.id} not found`);
                        }
                        // Calculate discount if applicable
                        const hasDiscount = ticket.discountPercentage && ticket.discountPercentage > 0;
                        const discountStartDate = ticket.discountStartDate
                            ? new Date(ticket.discountStartDate)
                            : null;
                        const discountEndDate = ticket.discountEndDate
                            ? new Date(ticket.discountEndDate)
                            : null;
                        const isDiscountActive = currentDate >= discountStartDate &&
                            currentDate <= discountEndDate;
                        const ticketPrice = ticket.price === 0
                            ? 0
                            : isDiscountActive && hasDiscount
                                ? ticket.price - (ticket.price * ticket.discountPercentage) / 100
                                : ticket.price;
                        const subTotalPrice = ticketPrice * orderItem.quantity;
                        totalSubTotalPrice += subTotalPrice;
                        orderDetails.push({
                            orderId: order.id,
                            ticketId: orderItem.ticket.id,
                            quantity: orderItem.quantity,
                            subTotalPrice,
                        });
                        ticketUpdates.push(tx.ticket.update({
                            where: { id: orderItem.ticket.id },
                            data: { quantity: { decrement: orderItem.quantity } },
                        }));
                    }
                    // Apply customer points
                    if (totalAvailablePoints > 0) {
                        const discountAmount = Math.min(totalAvailablePoints, totalSubTotalPrice);
                        totalSubTotalPrice -= discountAmount;
                    }
                    // Batch insert order details
                    yield tx.orderDetail.createMany({ data: orderDetails });
                    // Batch update tickets
                    yield Promise.all(ticketUpdates);
                    // Update Order Final Price
                    yield tx.order.update({
                        where: { id: order.id },
                        data: { finalPrice },
                    });
                    // Update Customer Coupon & Points
                    if (customerCoupon) {
                        yield tx.customerCoupon.updateMany({
                            where: { customerId, isRedeem: false },
                            data: { isRedeem: true },
                        });
                    }
                    if (customerPoints) {
                        yield tx.customerPoint.updateMany({
                            where: { customerId, isUsed: false },
                            data: { isUsed: true },
                        });
                    }
                    return order; // Return order to use order.id outside the transaction
                }));
                res.status(201).send({
                    message: "Order created successfully",
                    orderId: order.id,
                });
            }
            catch (error) {
                console.error(error);
                res.status(400).send({ message: "Order creation failed", error });
            }
        });
    }
    getOrderDetail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const order = yield prisma_1.default.order.findUnique({
                    where: { id: req.params.orderId },
                    select: {
                        id: true,
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
                const { order_id, gross_amount } = req.body;
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
                const snap = new midtransClient.Snap({
                    isProduction: false,
                    serverKey: `${process.env.MIDTRANS_SERVER_KEY}`,
                });
                const parameter = {
                    transaction_details: {
                        order_id: order_id.toString(),
                        gross_amount: gross_amount,
                    },
                    customer_details: {
                        first_name: customer === null || customer === void 0 ? void 0 : customer.fullname,
                        email: customer === null || customer === void 0 ? void 0 : customer.email,
                    },
                    expiry: {
                        unit: "minutes",
                        duration: orderExpireMinute,
                    },
                };
                const order = yield snap.createTransaction(parameter);
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
                if (orderStatus === "Canceled") {
                    const tickets = yield prisma_1.default.orderDetail.findMany({
                        where: { orderId: order_id },
                        select: {
                            ticketId: true,
                            quantity: true,
                        },
                    });
                    for (const item of tickets) {
                        yield prisma_1.default.ticket.update({
                            where: { id: item.ticketId },
                            data: { quantity: { increment: item.quantity } },
                        });
                    }
                }
                yield prisma_1.default.order.update({
                    where: { id: order_id },
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
