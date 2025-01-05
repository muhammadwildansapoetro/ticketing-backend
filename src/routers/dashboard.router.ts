import { Router } from "express";
import { DashboardController } from "../controllers/dashboard.controller";
import { verifyToken } from "../middlewares/verify";

export class DashboardRouter {
  private dashboardcontroller: DashboardController;
  private router: Router;

  constructor() {
    this.dashboardcontroller = new DashboardController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/eventGrafik", verifyToken,this.dashboardcontroller.getEventAktif);
    this.router.get("/transactionGrafik", verifyToken, this.dashboardcontroller.getTransaction)
    this.router.get("/ticketchart", verifyToken, this.dashboardcontroller.getTicket)
    this.router.get("/statistic", verifyToken, this.dashboardcontroller.getStatistics)
  }

  getRouter(): Router {
    return this.router;
  }
}
