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
exports.SystempointandcouponController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class SystempointandcouponController {
    redeemPoints(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                const { pointsToRedeem, ticketPrice } = req.body;
                // Ambil data poin pelanggan
                const customerPoints = yield prisma_1.default.customerPoint.findMany({
                    where: {
                        customerId: userId,
                        expiredAt: { gte: new Date() }, // Hanya poin yang belum kadaluarsa
                        isUsed: false,
                    },
                });
                // Hitung total poin yang tersedia
                const totalPoints = customerPoints.reduce((acc, point) => acc + point.point, 0);
                if (pointsToRedeem > totalPoints) {
                    return res.status(400).send({ message: "Insufficient points" });
                }
                // Hitung harga akhir tiket
                const discount = Math.min(pointsToRedeem, ticketPrice);
                const finalPrice = ticketPrice - discount;
                // Tandai poin sebagai terpakai
                let remainingPoints = pointsToRedeem;
                for (const point of customerPoints) {
                    if (remainingPoints <= 0)
                        break;
                    if (point.point <= remainingPoints) {
                        yield prisma_1.default.customerPoint.update({
                            where: { id: point.id },
                            data: { isUsed: true },
                        });
                        remainingPoints -= point.point;
                    }
                    else {
                        yield prisma_1.default.customerPoint.update({
                            where: { id: point.id },
                            data: { point: point.point - remainingPoints },
                        });
                        remainingPoints = 0;
                    }
                }
                res.status(200).send({ finalPrice, discount });
            }
            catch (error) {
                console.error(error);
                res.status(500).send({ message: "Server error" });
            }
        });
    }
    // routes/referral.ts
    applyReferralDiscount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                const customer = yield prisma_1.default.customer.findUnique({
                    where: { id: userId },
                    select: { referralCodeBy: true },
                });
                if (!customer || !customer.referralCodeBy) {
                    return res.status(400).send({ message: "No referral code applied" });
                }
                res.status(200).send({ discountPercentage: 10 });
            }
            catch (error) {
                console.error(error);
                res.status(500).send({ message: "Server error" });
            }
        });
    }
}
exports.SystempointandcouponController = SystempointandcouponController;
