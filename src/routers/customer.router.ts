import { Router } from "express";
import { CustomerController } from "../controllers/customer.controller";
import { verifyToken } from "../middlewares/verify";

export class CustomerRouter {
  private customerController: CustomerController;
  private router: Router;

  constructor() {
    this.customerController = new CustomerController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", verifyToken, this.customerController.getCustomers);
    this.router.post("/", this.customerController.createCustomer);
    this.router.get(
      "/profile",
      verifyToken,
      this.customerController.getCustomerId
    );
    this.router.get(
      "/events",
      verifyToken,
      this.customerController.getCustomerEvents
    );
    this.router.get(
      "/coupon",
      verifyToken,
      this.customerController.getCustomerCoupon
    );
    this.router.get(
      "/points",
      verifyToken,
      this.customerController.getCustomerPoints
    );

    this.router.patch("/:id", this.customerController.editCustomer);
    this.router.delete("/:id", this.customerController.deleteCustomer);
    this.router.get(
      "/tickets/:eventId",
      verifyToken,
      this.customerController.getCustomerTickets
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
