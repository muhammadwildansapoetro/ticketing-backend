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
exports.ReviewController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class ReviewController {
    addReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { rating, review } = req.body;
                const customerId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                const eventId = req.params.eventId;
                yield prisma_1.default.review.create({
                    data: {
                        customerId: customerId,
                        eventId: eventId,
                        rating: rating,
                        review: review,
                    },
                });
                res.status(201).send({ message: "Review added successfully" });
            }
            catch (error) {
                console.log("Error add review:", error);
                res.status(400).send(error);
            }
        });
    }
    getReviews(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reviews = yield prisma_1.default.review.findMany({
                    where: { eventId: req.params.eventId },
                    select: {
                        review: true,
                        rating: true,
                        createdAt: true,
                        customer: {
                            select: {
                                id: true,
                                fullname: true,
                            },
                        },
                    },
                });
                res.status(200).send({ reviews });
            }
            catch (error) {
                console.log("Error get reviews:", error);
                res.status(400).send(error);
            }
        });
    }
}
exports.ReviewController = ReviewController;
