"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizerRouter = void 0;
const express_1 = require("express");
// import { CustomerController } from "../controllers/customer.controller";
const verify_1 = require("../middlewares/verify");
const organizer_controller_1 = require("../controllers/organizer.controller");
class OrganizerRouter {
    constructor() {
        this.organizerController = new organizer_controller_1.OrganizerController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", verify_1.verifyToken, this.organizerController.getOrganizer);
        this.router.get("/profile", verify_1.verifyToken, this.organizerController.getOrganizerId);
        this.router.post("/", this.organizerController.createOrganizer);
        this.router.patch("/:id", this.organizerController.editOrganizer);
        this.router.delete("/:id", this.organizerController.deleteOrganizer);
    }
    getRouter() {
        return this.router;
    }
}
exports.OrganizerRouter = OrganizerRouter;
