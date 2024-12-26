<<<<<<< HEAD
// import { Router } from "express";
// import { EventController } from "../controllers/event.controller";
=======
import { Router } from "express";
import { EventController } from "../controllers/event.controller";
import { upload } from "../services/uploader";
>>>>>>> 59a595c96f5f450c34ea53b287e24bb8428e8a06

// export class EventRouter {
//   private eventController: EventController;
//   private router: Router;

//   constructor() {
//     this.eventController = new EventController();
//     this.router = Router();
//     this.initializeRoutes();
//   }

<<<<<<< HEAD
//   private initializeRoutes() {
//     this.router.get("/", this.eventController.getEvents);
//   }
=======
  private initializeRoutes() {
    this.router.get("/", this.eventController.getEvents);
    this.router.post(
      "/",
      upload.single("image"),
      this.eventController.createEvent
    );

    this.router.get("/:eventId", this.eventController.getEventDetail);
  }
>>>>>>> 59a595c96f5f450c34ea53b287e24bb8428e8a06

//   getRouter(): Router {
//     return this.router;
//   }
// }
