"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardRouter = void 0;
const express_1 = require("express");
const dashboard_controller_1 = require("../controllers/dashboard.controller");
const verify_1 = require("../middlewares/verify");
class DashboardRouter {
    constructor() {
        this.dashboardcontroller = new dashboard_controller_1.DashboardController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/eventGrafik", verify_1.verifyToken, this.dashboardcontroller.getEventAktif);
        this.router.get("/transactionGrafik", verify_1.verifyToken, this.dashboardcontroller.getTransaction);
        this.router.get("/ticketchart", verify_1.verifyToken, this.dashboardcontroller.getTicket);
        this.router.get("/statistic", verify_1.verifyToken, this.dashboardcontroller.getStatistics);
        this.router.get("/customerdetail", verify_1.verifyToken, this.dashboardcontroller.getCustomerRewards);
    }
    getRouter() {
        return this.router;
    }
}
exports.DashboardRouter = DashboardRouter;
