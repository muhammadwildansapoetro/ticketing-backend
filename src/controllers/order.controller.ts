import { Request, Response } from "express";
import prisma from "../prisma";
const midtransClient = require("midtrans-client");
import dotenv from "dotenv";
dotenv.config();

export class OrderController {
  async createOrder(req: Request, res: Response) {
    try {
      const customerId = 1;
      const { totalPrice, finalPrice, orderCart } = req.body;
      const expiredAt = new Date(new Date().getTime() + 10 * 60 * 1000);

      const { id } = await prisma.order.create({
        data: { customerId: customerId, totalPrice, finalPrice, expiredAt },
      });

      for (const order of orderCart) {
        await prisma.orderDetail.create({
          data: {
            orderId: id,
            ticketId: order.ticket.id,
            quantity: order.quantity,
            subTotalPrice: order.quantity * order.ticket.price,
          },
        });
        await prisma.ticket.update({
          data: { quantity: { decrement: order.quantity } },
          where: { id: order.ticket.id },
        });
      }

      res
        .status(201)
        .send({ message: "Order created successfully", orderId: id });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async getOrderDetail(req: Request, res: Response) {
    try {
      const order = await prisma.order.findUnique({
        where: { id: +req.params.orderId },
        select: {
          totalPrice: true,
          finalPrice: true,
          status: true,
          expiredAt: true,
          OrderDetail: {
            select: {
              quantity: true,
              subTotalPrice: true,
              ticket: {
                select: {
                  category: true,
                  price: true,
                  event: {
                    select: {
                      title: true,
                      date: true,
                      venue: true,
                      location: true,
                      startTime: true,
                      endTime: true,
                      image: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
      res.status(200).send({ order });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async getOrderToken(req: Request, res: Response) {
    try {
      const snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: `${process.env.MIDTRANS_SERVER_KEY}`,
      });

      const parameter = {
        transaction_details: req.body,
      };

      const order = await snap.createTransaction(parameter);
      const orderToken = order.token;
      res.status(201).send({ token: orderToken });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
}
