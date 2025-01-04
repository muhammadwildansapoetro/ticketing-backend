/*
  Warnings:

  - You are about to drop the column `name` on the `Organizer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Organizer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fullname` to the `Organizer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Organizer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Organizer" DROP COLUMN "name",
ADD COLUMN     "fullname" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Organizer_email_key" ON "Organizer"("email");
