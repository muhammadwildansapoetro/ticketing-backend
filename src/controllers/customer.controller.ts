import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import prisma from "../prisma";

export class CustomerController {
  async getCustomers(req: Request, res: Response) {
    try {
      const { search, page = 1, limit = 5 } = req.query;
      const filter: Prisma.CustomerWhereInput = {};
      if (search) {
        filter.OR = [
          { username: { contains: search as string, mode: "insensitive" } },
          { email: { contains: search as string, mode: "insensitive" } },
        ];
      }
      const countCostumer = await prisma.customer.aggregate({ _count: { _all: true } });
      const total_page = Math.ceil(countCostumer._count._all / +limit);
      const customers = await prisma.customer.findMany({
        where: filter,
        orderBy: { id: "asc" },
        take: +limit,
        skip: +limit * (+page - 1),
      });
      res.status(200).send({ total_page, page, customers });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async getCustomerId(req: Request, res: Response) {
    try {
      const customer = await prisma.customer.findUnique({
        where: { id: req.customer?.id },
      });
      res.status(200).send({ customer });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async createCustomer(req: Request, res: Response) {
    try {
      await prisma.customer.create({ data: req.body });
      res.status(201).send("User created ✅");
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async editCustomer(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.customer.update({ data: req.body, where: { id: +id } });
      res.status(200).send("User updated ✅");
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async deleteCustomer(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.customer.delete({ where: { id: +id } });
      res.status(200).send("User deleted ✅");
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}