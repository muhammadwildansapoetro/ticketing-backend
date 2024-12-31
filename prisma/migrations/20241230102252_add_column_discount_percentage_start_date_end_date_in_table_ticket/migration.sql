/*
  Warnings:

  - The values [Cancel] on the enum `OrderStatus` will be removed. If these variants are still used in the database, this will fail.
  - Made the column `referralCode` on table `Customer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "OrderStatus_new" AS ENUM ('Unpaid', 'Paid', 'Canceled');
ALTER TABLE "Order" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Order" ALTER COLUMN "status" TYPE "OrderStatus_new" USING ("status"::text::"OrderStatus_new");
ALTER TYPE "OrderStatus" RENAME TO "OrderStatus_old";
ALTER TYPE "OrderStatus_new" RENAME TO "OrderStatus";
DROP TYPE "OrderStatus_old";
ALTER TABLE "Order" ALTER COLUMN "status" SET DEFAULT 'Unpaid';
COMMIT;

-- DropIndex
DROP INDEX "Customer_referralCode_key";

-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "avatar" SET DEFAULT 'https://res.cloudinary.com/doiygpguv/image/upload/v1734056062/avatar-default_efbdwf.png',
ALTER COLUMN "referralCode" SET NOT NULL;

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "discountEndDate" TIMESTAMP(3),
ADD COLUMN     "discountPercentage" INTEGER,
ADD COLUMN     "discountStartDate" TIMESTAMP(3);
