import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get total transactions and total visitors
export class statistics {
  async getStatistics (req: Request, res: Response) {
    try {
      // Calculate total transactions for all paid orders
      const totalTransactions = await prisma.order.aggregate({
        _sum: {
          finalPrice: true,
        },
        where: {
          status: "Paid",
        },
      });

      // Count total unique visitors (unique customers who have placed orders)
      const totalVisitors = await prisma.order.groupBy({
        by: ["customerId"],
        _count: {
          customerId: true,
        },
      });

      res.status(200).json({
        totalTransactions: totalTransactions._sum.finalPrice || 0,
        totalVisitors: totalVisitors.length,
      });
    } catch (error) {
      console.error("Error fetching statistics:", error);
      res.status(500).json({ error: "Failed to fetch statistics" });
    }
  };
}
