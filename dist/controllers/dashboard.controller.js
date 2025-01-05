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
exports.DashboardController = void 0;
const formatMonth_1 = require("../helpers/formatMonth");
const prisma_1 = __importDefault(require("../prisma"));
class DashboardController {
    getEventAktif(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const id = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
            try {
                const events = yield prisma_1.default.event.findMany({
                    where: { organizerId: id },
                });
                let arrMonth = [];
                let chartData = [];
                for (const item of events) {
                    const month = new Date(item.date).getMonth();
                    arrMonth.push(month);
                    arrMonth.sort((a, b) => a - b);
                }
                for (const item of arrMonth) {
                    if (!JSON.stringify(chartData).includes((0, formatMonth_1.FormatMonth)(item))) {
                        chartData.push({ month: (0, formatMonth_1.FormatMonth)(item), event_active: 1 });
                    }
                    else {
                        chartData[chartData.length - 1].event_active += 1;
                    }
                }
                console.log(chartData);
                res.status(200).send({ result: chartData });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    getTransaction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const id = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                const profit = yield prisma_1.default.order.findMany({
                    where: { status: "Paid" },
                    select: { finalPrice: true, createdAt: true },
                });
                res.status(200).send(profit);
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    getTicket(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tiket = yield prisma_1.default.order.findMany({
                    where: { status: "Paid" },
                    select: {
                        createdAt: true,
                        OrderDetail: {
                            select: {
                                quantity: true,
                            },
                        },
                    },
                });
                let jumlahTiket = [];
                let chartData = [];
                for (const item of tiket) {
                    const year = new Date(item.createdAt).getFullYear();
                    let qty = 0;
                    for (const gabungin of item.OrderDetail) {
                        qty += gabungin.quantity;
                    }
                    jumlahTiket.push({ year, qty });
                    jumlahTiket.sort((a, b) => a.year - b.year);
                }
                for (const item of jumlahTiket) {
                    if (!JSON.stringify(chartData).includes(`${item}`)) {
                        chartData.push({ year: `${item}`, totalTicket: 1 });
                    }
                    else {
                        chartData[chartData.length - 1].totalTicket += 1;
                    }
                }
                console.log(chartData);
                res.status(200).send(chartData);
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
}
exports.DashboardController = DashboardController;
