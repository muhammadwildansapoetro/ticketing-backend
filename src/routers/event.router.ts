import { Router } from "express";
import { EventController } from "../controllers/event.controller";
import { upload } from "../services/uploader";

export class EventRouter {
  private eventController: EventController;
  private router: Router;

  constructor() {
    this.eventController = new EventController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.eventController.getEvents);
    this.router.post(
      "/",
      upload.single("image"),
      this.eventController.createEvent
    );

    this.router.get("/:eventId", this.eventController.getEventById);
  }

  getRouter(): Router {
    return this.router;
  }
}
