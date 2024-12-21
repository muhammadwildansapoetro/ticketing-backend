/*
  Warnings:

  - The values [Pending] on the enum `OrderStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [VIP,Regular,Free] on the enum `TicketCategory` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `eventId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `paymentProof` on the `Order` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `CustomerCoupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `CustomerPoint` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expiredAt` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subTotalPrice` to the `OrderDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `OrderDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `rating` on the `Review` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updatedAt` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RatingRange" AS ENUM ('1', '2', '3', '4', '5');

-- AlterEnum
BEGIN;
CREATE TYPE "OrderStatus_new" AS ENUM ('Unpaid', 'Paid', 'Cancel');
ALTER TABLE "Order" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Order" ALTER COLUMN "status" TYPE "OrderStatus_new" USING ("status"::text::"OrderStatus_new");
ALTER TYPE "OrderStatus" RENAME TO "OrderStatus_old";
ALTER TYPE "OrderStatus_new" RENAME TO "OrderStatus";
DROP TYPE "OrderStatus_old";
ALTER TABLE "Order" ALTER COLUMN "status" SET DEFAULT 'Unpaid';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "TicketCategory_new" AS ENUM ('North', 'East', 'South', 'West');
ALTER TABLE "Ticket" ALTER COLUMN "category" TYPE "TicketCategory_new" USING ("category"::text::"TicketCategory_new");
ALTER TYPE "TicketCategory" RENAME TO "TicketCategory_old";
ALTER TYPE "TicketCategory_new" RENAME TO "TicketCategory";
DROP TYPE "TicketCategory_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_eventId_fkey";

-- AlterTable
ALTER TABLE "CustomerCoupon" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "CustomerPoint" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "eventId",
DROP COLUMN "paymentProof",
ADD COLUMN     "expiredAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'Unpaid';

-- AlterTable
ALTER TABLE "OrderDetail" ADD COLUMN     "subTotalPrice" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "rating",
ADD COLUMN     "rating" "RatingRange" NOT NULL;

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
