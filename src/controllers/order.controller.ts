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
          customerId: true,
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
      const { order_id } = req.body;
      const item_details = [];

      const activeOrder = await prisma.order.findUnique({
        where: { id: order_id },
        select: { status: true, expiredAt: true },
      });

      if (activeOrder?.status === "Canceled")
        throw "Order canceled due to unpaid payment within 10 minutes.";

      const orderExpireMinute = Math.ceil(
        (new Date(activeOrder!.expiredAt).getTime() - new Date().getTime()) /
          60000
      );
      const orderDetail = await prisma.orderDetail.findMany({
        where: { orderId: order_id },
        include: {
          ticket: {
            select: { category: true },
          },
        },
      });

      const customer = await prisma.customer.findUnique({
        where: { id: 1 },
      });

      for (const ticket of orderDetail) {
        item_details.push({
          id: ticket.ticketId.toString(),
          name: ticket.ticket.category + " Stand",
          price: ticket.subTotalPrice / ticket.quantity,
          quantity: ticket.quantity,
        });
      }

      const snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: `${process.env.MIDTRANS_SERVER_KEY}`,
      });

      console.log("req body", req.body);

      const gross_amount = item_details.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      const parameter = {
        transaction_details: {
          order_id: order_id.toString(),
          gross_amount: gross_amount,
        },
        customer_details: {
          first_name: customer?.fullname,
          email: customer?.email,
        },
        item_details: item_details,
        expiry: {
          unit: "minutes",
          duration: orderExpireMinute,
        },
      };

      const order = await snap.createTransaction(parameter);
      res.status(200).send({ orderToken: order.token });
    } catch (error) {
      console.log("Error get order token:", error);
      res.status(400).send(error);
    }
  }

  async updateOrder(req: Request, res: Response) {
    try {
      const { transaction_status, order_id } = req.body;
      const orderStatus =
        transaction_status === "settlement"
          ? "Paid"
          : transaction_status === "pending"
          ? "Unpaid"
          : "Canceled";

      if (orderStatus === "Canceled") {
        const tickets = await prisma.orderDetail.findMany({
          where: { orderId: +order_id },
          select: {
            quantity: true,
            ticketId: true,
          },
        });
        for (const item of tickets) {
          await prisma.ticket.update({
            where: { id: item.ticketId },
            data: { quantity: { increment: item.quantity } },
          });
        }
      }

      await prisma.order.update({
        where: { id: +order_id },
        data: { status: orderStatus },
      });

      res.status(200).send({ message: "Payment success" });
    } catch (error) {
      console.log("Error update order:", error);
      res.status(400).send(error);
    }
  }
}
