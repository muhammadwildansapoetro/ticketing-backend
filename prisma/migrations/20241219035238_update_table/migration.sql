/*
  Warnings:

  - You are about to drop the column `expirededAt` on the `CustomerCoupon` table. All the data in the column will be lost.
  - Added the required column `expiredAt` to the `CustomerCoupon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CustomerCoupon" DROP COLUMN "expirededAt",
ADD COLUMN     "expiredAt" TIMESTAMP(3) NOT NULL;
