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

      const startDateTimeString = new Date(`${date}T${startTime}:00`);
      const endDateTimeString = new Date(`${date}T${endTime}:00`);

      const localDate = new Date(`${date}T00:00:00`);

      const organizerId = req.user?.id!;

      const { id } = await prisma.event.create({
        data: {
          image: secure_url,
          title,
          category,
          date: localDate,
          startTime: startDateTimeString,
          endTime: endDateTimeString,
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
      const limit = 12;
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

      const currentDate = new Date();
      filter.date = { gt: currentDate };

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
                fullname: true,
                username: true,
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
              discountPercentage: true,
              discountStartDate: true,
              discountEndDate: true,
            },
          },
          organizer: {
            select: {
              fullname: true,
              username: true,
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
