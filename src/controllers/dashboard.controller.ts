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
        where: { status: "Paid", customerId: id },
        select: { finalPrice: true, createdAt: true },
      });

      res.status(200).send(profit);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async getTicket(req: Request, res: Response) {
    const id = req.user?.id;

    interface IYear {
      year: string; // Tetap sebagai string untuk konsistensi
      totalTicket: number;
    }

    try {
      // Fetch data dari database
      const tiket = await prisma.order.findMany({
        where: { status: "Paid", customerId: id },
        select: {
          createdAt: true,
          OrderDetail: {
            select: {
              quantity: true,
            },
          },
        },
      });

      // Buat struktur data untuk menyimpan jumlah tiket per tahun
      const jumlahTiket: { year: number; quantity: number }[] = [];
      tiket.forEach((item) => {
        const year = new Date(item.createdAt).getFullYear(); // Dapatkan tahun
        let quantity = 0;

        // Hitung total quantity dari OrderDetail
        item.OrderDetail.forEach((detail) => {
          quantity += detail.quantity;
        });

        // Tambahkan data tahun dan quantity ke jumlahTiket
        const existingYear = jumlahTiket.find((data) => data.year === year);
        if (existingYear) {
          existingYear.quantity += quantity;
        } else {
          jumlahTiket.push({ year, quantity });
        }
      });

      // Buat data untuk chart
      const chartData: IYear[] = jumlahTiket.map((item) => ({
        year: item.year.toString(), // Pastikan year adalah string
        totalTicket: item.quantity,
      }));

      res.status(200).send({ result: chartData });
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  }

  async getStatistics(req: Request, res: Response) {
    try {
      // dapetin id
      const id = req.user?.id;

      // dapetin total event
      const events = await prisma.event.findMany({
        where: { organizerId: id },
      });
      const totalEvents: number = events.length;

      // dapetin total transaksi
      const order = await prisma.order.findMany({
        where: { status: "Paid", customerId: id },
        select: { finalPrice: true },
      });
      const totalOrders: number = order.length;

      //dapetin total penjualan
      const totalProfit: number = order.reduce(
        (n, { finalPrice }) => n + finalPrice,
        0
      );

      //dapetin total tiket terjual
      const ticket = await prisma.orderDetail.findMany({
        where: {
          order: {
            is: { status: "Paid", customerId: id },
          },
        },
        select: { quantity: true },
      });
      const totalTickets: number = ticket.reduce(
        (n, { quantity }) => n + quantity,
        0
      );

      res
        .status(200)
        .send([totalEvents, totalOrders, totalProfit, totalTickets]);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
  
  async getCustomerRewards(req: Request, res: Response): Promise<void> {
    try {
      const customerId = req.user?.id;

      if (!customerId) {
        res.status(401).send({ message: "Unauthorized" });
        return; // Tambahkan return untuk menghentikan eksekusi
      }

      const customerPoints = await prisma.customerPoint.findMany({
        where: {
          customerId: customerId,
          expiredAt: {
            gte: new Date(),
          },
          isUsed: false,
        },
        select: {
          id: true,
          point: true,
          expiredAt: true,
        },
      });

      const customerCoupons = await prisma.customerCoupon.findMany({
        where: {
          customerId: customerId,
          expiredAt: {
            gte: new Date(),
          },
          isRedeem: false,
        },
        select: {
          customerId: true,
          percentage: true,
          expiredAt: true,
        },
      });

      res.status(200).json({
        points: customerPoints,
        coupons: customerCoupons,
      });
    } catch (error) {
      console.error("Error fetching customer rewards:", error);

      res.status(500).send({
        message: "Internal Server Error",
        error,
      });
    }
  }
}
