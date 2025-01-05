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
                    where: { status: "Paid", customerId: id },
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
            var _a;
            const id = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
            try {
                // Fetch data dari database
                const tiket = yield prisma_1.default.order.findMany({
                    where: { status: "Paid", customerId: id },
                    select: {
                        createdAt: true,
                        OrderDetail: {
                            select: {
                                quantity: true,
                            },
                        },
                    },
                });
                // Buat struktur data untuk menyimpan jumlah tiket per tahun
                const jumlahTiket = [];
                tiket.forEach((item) => {
                    const year = new Date(item.createdAt).getFullYear(); // Dapatkan tahun
                    let quantity = 0;
                    // Hitung total quantity dari OrderDetail
                    item.OrderDetail.forEach((detail) => {
                        quantity += detail.quantity;
                    });
                    // Tambahkan data tahun dan quantity ke jumlahTiket
                    const existingYear = jumlahTiket.find((data) => data.year === year);
                    if (existingYear) {
                        existingYear.quantity += quantity;
                    }
                    else {
                        jumlahTiket.push({ year, quantity });
                    }
                });
                // Buat data untuk chart
                const chartData = jumlahTiket.map((item) => ({
                    year: item.year.toString(), // Pastikan year adalah string
                    totalTicket: item.quantity,
                }));
                res.status(200).send({ result: chartData });
            }
            catch (error) {
                console.error(error);
                res.status(400).send(error);
            }
        });
    }
    getStatistics(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                // dapetin id
                const id = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                // dapetin total event
                const events = yield prisma_1.default.event.findMany({
                    where: { organizerId: id },
                });
                const totalEvents = events.length;
                // dapetin total transaksi
                const order = yield prisma_1.default.order.findMany({
                    where: { status: "Paid", customerId: id },
                    select: { finalPrice: true },
                });
                const totalOrders = order.length;
                //dapetin total penjualan
                const totalProfit = order.reduce((n, { finalPrice }) => n + finalPrice, 0);
                //dapetin total tiket terjual
                const ticket = yield prisma_1.default.orderDetail.findMany({
                    where: {
                        order: {
                            is: { status: "Paid", customerId: id },
                        },
                    },
                    select: { quantity: true },
                });
                const totalTickets = ticket.reduce((n, { quantity }) => n + quantity, 0);
                res
                    .status(200)
                    .send([totalEvents, totalOrders, totalProfit, totalTickets]);
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    getCustomerRewards(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const customerId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                if (!customerId) {
                    res.status(401).send({ message: "Unauthorized" });
                    return; // Tambahkan return untuk menghentikan eksekusi
                }
                const customerPoints = yield prisma_1.default.customerPoint.findMany({
                    where: {
                        customerId: customerId,
                        expiredAt: {
                            gte: new Date(),
                        },
                        isUsed: false,
                    },
                    select: {
                        id: true,
                        point: true,
                        expiredAt: true,
                    },
                });
                const customerCoupons = yield prisma_1.default.customerCoupon.findMany({
                    where: {
                        customerId: customerId,
                        expiredAt: {
                            gte: new Date(),
                        },
                        isRedeem: false,
                    },
                    select: {
                        customerId: true,
                        percentage: true,
                        expiredAt: true,
                    },
                });
                res.status(200).json({
                    points: customerPoints,
                    coupons: customerCoupons,
                });
            }
            catch (error) {
                console.error("Error fetching customer rewards:", error);
                res.status(500).send({
                    message: "Internal Server Error",
                    error,
                });
            }
        });
    }
}
exports.DashboardController = DashboardController;
