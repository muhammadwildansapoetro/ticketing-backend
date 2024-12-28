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
      const countOrganizer = await prisma.organizer.aggregate({ _count: { _all: true } });
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
        where: { id: req.mix?.id },
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
      res.status(201).send({message: "User created ✅"});
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async editOrganizer(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.organizer.update({ data: req.body, where: { id: +id } });
      res.status(200).send({message: "User updated ✅"});
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async deleteOrganizer(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.organizer.delete({ where: { id: +id } });
      res.status(200).send({message: "User deleted ✅"});
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}