"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const cloudinary_1 = require("../services/cloudinary");
class EventController {
    createEvent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.file)
                    throw { message: "Image is required" };
                const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(req.file, "events");
                const { title, category, date, startTime, endTime, location, venue, description, } = req.body;
                const [startHour, startMinute] = startTime.split(":").map(Number);
                const [endHour, endMinute] = endTime.split(":").map(Number);
                const formatStartTime = new Date();
                formatStartTime.setUTCHours(startHour - 7, startMinute, 0, 0);
                const formatEndTime = new Date();
                formatEndTime.setUTCHours(endHour - 7, endMinute, 0, 0);
                const organizerId = 1;
                const { id } = yield prisma_1.default.event.create({
                    data: {
                        image: secure_url,
                        title,
                        category,
                        date: new Date(date),
                        startTime: formatStartTime,
                        endTime: formatEndTime,
                        location,
                        venue,
                        description,
                        organizerId: organizerId,
                    },
                });
                res
                    .status(201)
                    .send({ message: "Match created successfully", eventId: id });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    getEvents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const events = yield prisma_1.default.event.findMany({
                    select: {
                        id: true,
                        title: true,
                        image: true,
                        category: true,
                        description: true,
                        location: true,
                        venue: true,
                        date: true,
                        startTime: true,
                        endTime: true,
                        organizer: {
                            select: {
                                name: true,
                                avatar: true,
                            },
                        },
                    },
                });
                res.status(200).send({ events });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    getEventById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const event = yield prisma_1.default.event.findUnique({
                    select: {
                        id: true,
                        title: true,
                        image: true,
                        category: true,
                        description: true,
                        location: true,
                        venue: true,
                        date: true,
                        startTime: true,
                        endTime: true,
                        Ticket: {
                            select: {
                                category: true,
                                price: true,
                                quantity: true,
                                description: true,
                            },
                        },
                        organizer: {
                            select: {
                                name: true,
                                avatar: true,
                            },
                        },
                    },
                    where: { id: req.params.eventId },
                });
                res.status(200).send({ event });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
}
exports.EventController = EventController;
