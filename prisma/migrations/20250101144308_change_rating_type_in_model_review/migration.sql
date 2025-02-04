/*
  Warnings:

  - Changed the type of `rating` on the `Review` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "avatar" SET DEFAULT 'https://res.cloudinary.com/doiygpguv/image/upload/v1734129888/customer-default-avatar_kas8rt.png';

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "rating",
ADD COLUMN     "rating" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "RatingRange";
