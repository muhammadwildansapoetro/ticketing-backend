/*
  Warnings:

  - You are about to drop the column `expirededAt` on the `CustomerCoupon` table. All the data in the column will be lost.
  - You are about to drop the column `availableSeat` on the `Ticket` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[referralCode]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `expiredAt` to the `CustomerCoupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer" 
ADD COLUMN     "referralCodeBy" TEXT,
ALTER COLUMN "referralCode" DROP NOT NULL;

-- AlterTable
ALTER TABLE "CustomerCoupon" DROP COLUMN "expirededAt",
ADD COLUMN     "expiredAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "availableSeat",
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Customer_referralCode_key" ON "Customer"("referralCode");
