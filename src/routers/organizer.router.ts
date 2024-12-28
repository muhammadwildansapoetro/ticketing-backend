import { Router } from "express";
// import { CustomerController } from "../controllers/customer.controller";
import { verifyToken } from "../middlewares/verify";
import { OrganizerController } from "../controllers/organizer.controller";

export class OrganizerRouter {
  private organizerController: OrganizerController;
  private router: Router;

  constructor() {
    this.organizerController = new OrganizerController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", verifyToken, this.organizerController.getOrganizer);
    this.router.get(
        "/profile",
        verifyToken,
        this.organizerController.getOrganizerId
    );
    this.router.post("/", this.organizerController.createOrganizer);
    this.router.patch("/:id", this.organizerController.editOrganizer);
    this.router.delete("/:id", this.organizerController.deleteOrganizer);
  }

  getRouter(): Router {
    return this.router;
  }
}
