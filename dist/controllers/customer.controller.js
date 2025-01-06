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
exports.CustomerController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class CustomerController {
    getCustomers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { search, page = 1, limit = 5 } = req.query;
                const filter = {};
                if (search) {
                    filter.OR = [
                        { username: { contains: search, mode: "insensitive" } },
                        { email: { contains: search, mode: "insensitive" } },
                    ];
                }
                const countCostumer = yield prisma_1.default.customer.aggregate({
                    _count: { _all: true },
                });
                const total_page = Math.ceil(countCostumer._count._all / +limit);
                const customers = yield prisma_1.default.customer.findMany({
                    where: filter,
                    orderBy: { id: "asc" },
                    take: +limit,
                    skip: +limit * (+page - 1),
                });
                res.status(200).send({ total_page, page, customers });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getCustomerId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const customer = yield prisma_1.default.customer.findUnique({
                    where: { id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id },
                });
                res.status(200).send({ customer });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    createCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma_1.default.customer.create({ data: req.body });
                res.status(201).send({ message: "User created ✅" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    editCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield prisma_1.default.customer.update({ data: req.body, where: { id: +id } });
                res.status(200).send({ message: "User updated ✅" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    deleteCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield prisma_1.default.customer.delete({ where: { id: +id } });
                res.status(200).send({ message: "User deleted ✅" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getCustomerEvents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) === "organizer")
                    throw { message: "Unauthorized access." };
                const filter = {};
                filter.Ticket = {
                    some: {
                        OrderDetail: {
                            some: {
                                order: {
                                    AND: [{ customerId: (_b = req.user) === null || _b === void 0 ? void 0 : _b.id }, { status: "Paid" }],
                                },
                            },
                        },
                    },
                };
                const { status } = req.query;
                if (status === "upcoming") {
                    filter.date = {
                        gt: new Date(),
                    };
                }
                else if (status === "attended") {
                    filter.date = {
                        lt: new Date(),
                    };
                }
                const events = yield prisma_1.default.event.findMany({
                    where: filter,
                    select: {
                        id: true,
                        title: true,
                        image: true,
                        date: true,
                        startTime: true,
                        endTime: true,
                        location: true,
                        venue: true,
                    },
                });
                res.status(200).send({ events });
            }
            catch (error) {
                console.log("Error get customer events:", error);
                res.status(400).send({ message: "Error get customer events:", error });
            }
        });
    }
    getCustomerTickets(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const tickets = yield prisma_1.default.ticket.findMany({
                    where: {
                        AND: [
                            { eventId: req.params.eventId },
                            {
                                OrderDetail: {
                                    some: {
                                        order: {
                                            AND: [{ customerId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id }, { status: "Paid" }],
                                        },
                                    },
                                },
                            },
                        ],
                    },
                    select: {
                        id: true,
                        category: true,
                        description: true,
                        price: true,
                        event: {
                            select: {
                                id: true,
                                title: true,
                                venue: true,
                                location: true,
                                image: true,
                                date: true,
                                startTime: true,
                            },
                        },
                    },
                });
                res.status(200).send({ tickets });
            }
            catch (error) {
                console.log("Error get customer tickets:", error);
                res.status(400).send({ message: "Error get customer tickets:", error });
            }
        });
    }
    getCustomerCoupon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const coupon = yield prisma_1.default.customerCoupon.findFirst({
                    where: {
                        AND: [
                            { customerId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id },
                            { expiredAt: { gt: new Date() } },
                            { isRedeem: false },
                        ],
                    },
                    select: { percentage: true },
                });
                res.status(200).send({ coupon: (coupon === null || coupon === void 0 ? void 0 : coupon.percentage) || 0 });
            }
            catch (error) {
                console.log("Error get customer coupon:", error);
                res.status(400).send(error);
            }
        });
    }
    getCustomerPoints(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const points = yield prisma_1.default.customerPoint.aggregate({
                    where: {
                        AND: [
                            { customerId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id },
                            { expiredAt: { gt: new Date() } },
                            { isUsed: false },
                        ],
                    },
                    _sum: { point: true },
                });
                res.status(200).send({ totalPoints: points._sum.point });
            }
            catch (error) {
                console.log("Error get customer points:", error);
                res.status(400).send(error);
            }
        });
    }
}
exports.CustomerController = CustomerController;
