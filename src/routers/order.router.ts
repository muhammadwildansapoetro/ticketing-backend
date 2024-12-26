import { Router } from "express";
import { OrderController } from "../controllers/order.controller";

export class OrderRouter {
  private orderController: OrderController;
  private router: Router;

  constructor() {
    this.orderController = new OrderController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/", this.orderController.createOrder);
    this.router.post("/payment", this.orderController.getOrderToken);
    this.router.post("/midtrans-webhook", this.orderController.updateOrder);
    this.router.get("/:orderId", this.orderController.getOrderDetail);
  }

  getRouter(): Router {
    return this.router;
  }
}
