import { Request, Response } from "express";
import prisma from "../prisma";
import { Prisma } from "prisma/generated/client";

export class OrganizerController {
  async getOrganizer(req: Request, res: Response) {
    try {
      const { search, page = 1, limit = 5 } = req.query;
      const filter: Prisma.OrganizerWhereInput = {};
      if (search) {
        filter.OR = [
          { name: { contains: search as string, mode: "insensitive" } },
          { email: { contains: search as string, mode: "insensitive" } },
        ];
      }
      const countOrganizer = await prisma.organizer.aggregate({
        _count: { _all: true },
      });
      const total_page = Math.ceil(countOrganizer._count._all / +limit);
      const organizer = await prisma.organizer.findMany({
        where: filter,
        orderBy: { id: "asc" },
        take: +limit,
        skip: +limit * (+page - 1),
      });
      res.status(200).send({ total_page, page, organizer });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getOrganizerId(req: Request, res: Response) {
    try {
      const organizer = await prisma.organizer.findUnique({
        where: { id: req.user?.id },
      });
      res.status(200).send({ organizer });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async createOrganizer(req: Request, res: Response) {
    try {
      await prisma.organizer.create({ data: req.body });
      res.status(201).send({ message: "User created ✅" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async editOrganizer(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.organizer.update({ data: req.body, where: { id: +id } });
      res.status(200).send({ message: "User updated ✅" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async deleteOrganizer(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.organizer.delete({ where: { id: +id } });
      res.status(200).send({ message: "User deleted ✅" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getOrganizerEvents(req: Request, res: Response) {
    try {
      if (req.user?.role === "customer")
        throw { message: "Unauthorized access." };

      const filter: Prisma.EventWhereInput = {};

      const { status } = req.query;

      if (status === "upcoming") {
        filter.date = {
          gt: new Date(),
        };
      } else if (status === "ended") {
        filter.date = {
          lt: new Date(),
        };
      }

      const events = await prisma.event.findMany({
        where: { organizerId: req.user?.id, ...filter },
        select: {
          id: true,
          title: true,
          image: true,
          date: true,
          startTime: true,
          endTime: true,
          location: true,
          venue: true,
          Review: {
            select: {
              rating: true,
              review: true,
              customer: {
                select: {
                  fullname: true,
                },
              },
            },
          },
        },
      });

      res.status(200).send({ events });
    } catch (error) {
      console.log("Error get organizer events:", error);
      res.status(400).send({ message: "Error get organizer events:", error });
    }
  }
}
