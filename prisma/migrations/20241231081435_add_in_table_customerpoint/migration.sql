/*
  Warnings:

  - A unique constraint covering the columns `[customerId,expiredAt]` on the table `CustomerPoint` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CustomerPoint_customerId_expiredAt_key" ON "CustomerPoint"("customerId", "expiredAt");
