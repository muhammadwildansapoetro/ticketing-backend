"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRouter = void 0;
const express_1 = require("express");
const review_controller_1 = require("../controllers/review.controller");
const verify_1 = require("../middlewares/verify");
class ReviewRouter {
    constructor() {
        this.reviewController = new review_controller_1.ReviewController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/:eventId", verify_1.verifyToken, this.reviewController.addReview);
        this.router.get("/:eventId", this.reviewController.getReviews);
    }
    getRouter() {
        return this.router;
    }
}
exports.ReviewRouter = ReviewRouter;
