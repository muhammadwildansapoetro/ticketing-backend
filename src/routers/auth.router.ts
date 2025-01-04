import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { verifyToken } from "../middlewares/verify";

export class AuthRouter {
  private authController: AuthController;
  private router: Router;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/session", verifyToken, this.authController.getSession);
    this.router.post(
      "/customer/register",
      this.authController.registerCustomer
    );
    this.router.post("/customer/sign-in", this.authController.SignInCustomer);
    this.router.post(
      "/organizer/register",
      this.authController.registerOrganizer
    );
    this.router.post("/organizer/sign-in", this.authController.signInOrganizer);

    this.router.patch(
      "/customer/verify/:token",
      this.authController.verifyCustomer
    );
    this.router.patch(
      "/organizer/verify/:token",
      this.authController.verifyOrganizer
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
