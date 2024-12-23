import { Request, Response } from "express";
import { cloudinaryUpload } from "../services/cloudinary";
import prisma from "../prisma";

export class EventController {
  async createEvent(req: Request, res: Response) {
    try {
      if (!req.file) throw { message: "Image is required" };
      const { secure_url } = await cloudinaryUpload(req.file, "events");
      const {
        title,
        category,
        date,
        startTime,
        endTime,
        location,
        venue,
        description,
      } = req.body;

      const [startHour, startMinute] = startTime.split(":").map(Number);
      const [endHour, endMinute] = endTime.split(":").map(Number);

      const formatStartTime = new Date();
      formatStartTime.setUTCHours(startHour - 7, startMinute, 0, 0);

      const formatEndTime = new Date();
      formatEndTime.setUTCHours(endHour - 7, endMinute, 0, 0);

      const organizerId = 9;

      const { id } = await prisma.event.create({
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
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async getEvents(req: Request, res: Response) {
    try {
      const events = await prisma.event.findMany({
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
          Ticket: {
            select: {
              price: true,
            },
          },
        },
      });

      res.status(200).send({ events });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async getEventDetail(req: Request, res: Response) {
    try {
      const event = await prisma.event.findUnique({
        where: { id: req.params.eventId },
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
      });
      res.status(200).send({ event });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
}
