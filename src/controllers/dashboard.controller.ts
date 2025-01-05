// import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { FormatMonth } from "../helpers/formatMonth";
import prisma from "../prisma";

export class DashboardController {
  async getEventAktif(req: Request, res: Response) {
    const id = req.user?.id;
    interface IDataEvent {
      month: string;
      event_active: number;
    }
    try {
      const events = await prisma.event.findMany({
        where: { organizerId: id },
      });
      let arrMonth = [];
      let chartData: IDataEvent[] = [];
      for (const item of events) {
        const month = new Date(item.date).getMonth();
        arrMonth.push(month);
        arrMonth.sort((a, b) => a - b);
      }
      for (const item of arrMonth) {
        if (!JSON.stringify(chartData).includes(FormatMonth(item))) {
          chartData.push({ month: FormatMonth(item), event_active: 1 });
        } else {
          chartData[chartData.length - 1].event_active += 1;
        }
      }
      console.log(chartData);
      res.status(200).send({ result: chartData });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
  async getTransaction(req: Request, res: Response) {
    try {
      const id = req.user?.id;
      const profit = await prisma.order.findMany({
        where: { status: "Paid" },
        select: { finalPrice: true, createdAt: true },
      });

      res.status(200).send(profit);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async getTicket(req: Request, res: Response) {
    interface IYear {
      year: string;
      totalTicket: number;
    }
    try {
      const tiket = await prisma.order.findMany({
        where: { status: "Paid" },
        select: {
          createdAt: true,
          OrderDetail: {
            select: {
              quantity: true,
            },
          },
        },
      });

      let jumlahTiket = [];
      let chartData: IYear[] = [];
      for (const item of tiket) {
        const year = new Date(item.createdAt).getFullYear();
        let qty = 0;
        for (const gabungin of item.OrderDetail) {
          qty += gabungin.quantity;
        }
        jumlahTiket.push({ year, qty });
        jumlahTiket.sort((a, b) => a.year - b.year);
      }

      for (const item of jumlahTiket) {
        if (!JSON.stringify(chartData).includes(`${item}`)) {
          chartData.push({ year: `${item}`, totalTicket: 1 });
        } else {
          chartData[chartData.length - 1].totalTicket += 1;
        }
      }

      console.log(chartData);
      res.status(200).send(chartData);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
}
