"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRouter = void 0;
const express_1 = require("express");
const customer_controller_1 = require("../controllers/customer.controller");
const verify_1 = require("../middlewares/verify");
class CustomerRouter {
    constructor() {
        this.customerController = new customer_controller_1.CustomerController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", verify_1.verifyToken, this.customerController.getCustomers);
        this.router.get("/profile", verify_1.verifyToken, this.customerController.getCustomerId);
        this.router.post("/", this.customerController.createCustomer);
        this.router.patch("/:id", this.customerController.editCustomer);
        this.router.delete("/:id", this.customerController.deleteCustomer);
    }
    getRouter() {
        return this.router;
    }
}
exports.CustomerRouter = CustomerRouter;