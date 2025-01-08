import prisma from "../prisma";
import { Request, Response } from "express";
import { Prisma } from "prisma/generated/client";

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
      const countCostumer = await prisma.customer.aggregate({
        _count: { _all: true },
      });
      const total_page = Math.ceil(countCostumer._count._all / +limit);
      const customers = await prisma.customer.findMany({
        where: filter,
        orderBy: { id: "asc" },
        take: +limit,
        skip: +limit * (+page - 1),
      });
      res.status(200).send({ total_page, page, customers });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async getCustomerId(req: Request, res: Response) {
    try {
      const customer = await prisma.customer.findUnique({
        where: { id: req.user?.id },
      });
      res.status(200).send({ customer });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async createCustomer(req: Request, res: Response) {
    try {
      await prisma.customer.create({ data: req.body });
      res.status(201).send({ message: "User created ✅" });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async editCustomer(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.customer.update({ data: req.body, where: { id: +id } });
      res.status(200).send({ message: "User updated ✅" });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async deleteCustomer(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.customer.delete({ where: { id: +id } });
      res.status(200).send({ message: "User deleted ✅" });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async getCustomerEvents(req: Request, res: Response) {
    try {
      if (req.user?.role === "organizer")
        throw { message: "Unauthorized access." };

      const filter: Prisma.EventWhereInput = {};

      filter.Ticket = {
        some: {
          OrderDetail: {
            some: {
              order: {
                AND: [{ customerId: req.user?.id }, { status: "Paid" }],
              },
            },
          },
        },
      };

      const { status } = req.query;
      if (status === "upcoming") {
        filter.date = {
          gt: new Date(),
        };
      } else if (status === "attended") {
        filter.date = {
          lt: new Date(),
        };
      }

      const events = await prisma.event.findMany({
        where: filter,
        select: {
          id: true,
          title: true,
          image: true,
          date: true,
          startTime: true,
          endTime: true,
          location: true,
          venue: true,
        },
      });

      res.status(200).send({ events });
    } catch (error) {
      console.log("Error get customer events:", error);
      res.status(400).send({ message: "Error get customer events:", error });
    }
  }

  async getCustomerTickets(req: Request, res: Response) {
    try {
      const tickets = await prisma.ticket.findMany({
        where: {
          AND: [
            { eventId: req.params.eventId },
            {
              OrderDetail: {
                some: {
                  order: {
                    AND: [{ customerId: req.user?.id }, { status: "Paid" }],
                  },
                },
              },
            },
          ],
        },
        select: {
          id: true,
          category: true,
          description: true,
          price: true,
          event: {
            select: {
              id: true,
              title: true,
              venue: true,
              location: true,
              image: true,
              date: true,
              startTime: true,
            },
          },
        },
      });

      res.status(200).send({ tickets });
    } catch (error) {
      console.log("Error get customer tickets:", error);
      res.status(400).send({ message: "Error get customer tickets:", error });
    }
  }

  async getCustomerCoupon(req: Request, res: Response) {
    try {
      const coupon = await prisma.customerCoupon.findFirst({
        where: {
          AND: [
            { customerId: req.user?.id },
            { expiredAt: { gt: new Date() } },
            { isRedeem: false },
          ],
        },
        select: { percentage: true },
      });

      res.status(200).send({ coupon: coupon?.percentage || 0 });
    } catch (error) {
      console.log("Error get customer coupon:", error);
      res.status(400).send(error);
    }
  }

  async getCustomerPoints(req: Request, res: Response) {
    try {
      const points = await prisma.customerPoint.aggregate({
        where: {
          AND: [
            { customerId: req.user?.id },
            { expiredAt: { gt: new Date() } },
            { isUsed: false },
          ],
        },
        _sum: { point: true },
      });

      res.status(200).send({ totalPoints: points._sum.point });
    } catch (error) {
      console.log("Error get customer points:", error);
      res.status(400).send(error);
    }
  }
}
