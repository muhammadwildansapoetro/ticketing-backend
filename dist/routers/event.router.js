"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRouter = void 0;
const express_1 = require("express");
const event_controller_1 = require("../controllers/event.controller");
const uploader_1 = require("../services/uploader");
const verify_1 = require("../middlewares/verify");
class EventRouter {
    constructor() {
        this.eventController = new event_controller_1.EventController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", this.eventController.getEvents);
        this.router.post("/", verify_1.verifyToken, verify_1.organizerCheck, uploader_1.upload.single("image"), this.eventController.createEvent);
        this.router.get("/:eventId", this.eventController.getEventDetail);
    }
    getRouter() {
        return this.router;
    }
}
exports.EventRouter = EventRouter;
