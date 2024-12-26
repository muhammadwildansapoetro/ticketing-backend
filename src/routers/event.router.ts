<<<<<<< HEAD
// import { Router } from "express";
// import { EventController } from "../controllers/event.controller";
=======
import { Router } from "express";
import { EventController } from "../controllers/event.controller";
import { upload } from "../services/uploader";
<<<<<<< HEAD
>>>>>>> 59a595c96f5f450c34ea53b287e24bb8428e8a06
=======
>>>>>>> e0ef3122cab57ca796bfe197c28b9d38dab6db7e

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
<<<<<<< HEAD
=======

    this.router.get("/:eventId", this.eventController.getEventDetail);
  }
>>>>>>> e0ef3122cab57ca796bfe197c28b9d38dab6db7e

    this.router.get("/:eventId", this.eventController.getEventDetail);
  }
>>>>>>> 59a595c96f5f450c34ea53b287e24bb8428e8a06

//   getRouter(): Router {
//     return this.router;
//   }
// }
