"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const verify_1 = require("../middlewares/verify");
class AuthRouter {
    constructor() {
        this.authController = new auth_controller_1.AuthController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/session", verify_1.verifyToken, this.authController.getSession);
        this.router.post("/organizer/register", this.authController.registerOrganizer);
        this.router.post("/customer/register", this.authController.registerCustomer);
        this.router.post("/organizer/sign-in", this.authController.signInOrganizer);
        this.router.post("/customer/sign-in", this.authController.signInCustomer);
        this.router.patch("/organizer/verify/:token", this.authController.verifyOrganizer);
        this.router.patch("/customer/verify/:token", this.authController.verifyCustomer);
    }
    getRouter() {
        return this.router;
    }
}
exports.AuthRouter = AuthRouter;
