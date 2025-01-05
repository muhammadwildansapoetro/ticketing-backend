// routes/redeem.ts
import { Request, Response } from "express";
import prisma from "../prisma";

export class SystempointandcouponController {
  async redeemPoints(req: Request, res: Response) {
    try {
      const userId = req.user?.id;
      const { pointsToRedeem, ticketPrice } = req.body;

      // Ambil data poin pelanggan
      const customerPoints = await prisma.customerPoint.findMany({
        where: {
          customerId: userId,
          expiredAt: { gte: new Date() }, // Hanya poin yang belum kadaluarsa
          isUsed: false,
        },
      });

      // Hitung total poin yang tersedia
      const totalPoints = customerPoints.reduce(
        (acc, point) => acc + point.point,
        0
      );

      if (pointsToRedeem > totalPoints) {
        return res.status(400).send({ message: "Insufficient points" });
      }

      // Hitung harga akhir tiket
      const discount = Math.min(pointsToRedeem, ticketPrice);
      const finalPrice = ticketPrice - discount;

      // Tandai poin sebagai terpakai
      let remainingPoints = pointsToRedeem;
      for (const point of customerPoints) {
        if (remainingPoints <= 0) break;

        if (point.point <= remainingPoints) {
          await prisma.customerPoint.update({
            where: { id: point.id },
            data: { isUsed: true },
          });
          remainingPoints -= point.point;
        } else {
          await prisma.customerPoint.update({
            where: { id: point.id },
            data: { point: point.point - remainingPoints },
          });
          remainingPoints = 0;
        }
      }

      res.status(200).send({ finalPrice, discount });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Server error" });
    }
  }
  // routes/referral.ts
async applyReferralDiscount (req: Request, res: Response) {
  try {
    const userId = req.user?.id;

    const customer = await prisma.customer.findUnique({
      where: { id: userId },
      select: { referralCodeBy: true },
    });

    if (!customer || !customer.referralCodeBy) {
      return res.status(400).send({ message: "No referral code applied" });
    }

    res.status(200).send({ discountPercentage: 10 });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server error" });
  }
};

}
