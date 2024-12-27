import { Request, Response } from "express";
import { cloudinaryUpload } from "../services/cloudinary";
import prisma from "../prisma";
import { EventCategory, Prisma } from "prisma/generated/client";
import { Readable } from "stream";

export class EventController {
  async createEvent(req: Request, res: Response) {
    try {
      if (!req.file) throw { message: "Image is required" };

      const file = req.file as Express.Multer.File & { stream: Readable };

      const { secure_url } = await cloudinaryUpload(file, "events");

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

      console.log("Formatted Times:", {
        startTime: formatStartTime,
        endTime: formatEndTime,
      });

      const organizerId = 12;

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
      console.log("Error create event:", error);
      res.status(400).send(error);
    }
  }

  async getEvents(req: Request, res: Response) {
    try {
      const limit = 2;
      const { page = "1" } = req.query;
      const { search, category, location } = req.query;
      const filter: Prisma.EventWhereInput = {};

      if (search) {
        filter.title = { contains: search as string, mode: "insensitive" };
      }
      if (category) {
        filter.category = { equals: category as EventCategory };
      }
      if (location) {
        filter.location = { equals: location as string, mode: "insensitive" };
      }

      const [events, totalEvents] = await Promise.all([
        prisma.event.findMany({
          where: filter,
          take: limit,
          skip: +limit * (+page - 1),
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
        }),
        prisma.event.count({ where: filter }),
      ]);

      const totalPages = Math.ceil(totalEvents / limit);
      console.log("total events:", totalEvents);

      res.status(200).send({ events, totalPages });
    } catch (error) {
      console.log("Error get events:", error);
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
      console.log("Error get event detail:", error);
      res.status(400).send(error);
    }
  }
}
