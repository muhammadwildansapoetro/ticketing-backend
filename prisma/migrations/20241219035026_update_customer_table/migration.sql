-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "refLogId" INTEGER;

-- CreateTable
CREATE TABLE "RefLog" (
    "id" SERIAL NOT NULL,
    "pointGet" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiredAt" TIMESTAMP(3) NOT NULL,
    "isUsed" BOOLEAN NOT NULL,

    CONSTRAINT "RefLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_refLogId_fkey" FOREIGN KEY ("refLogId") REFERENCES "RefLog"("id") ON DELETE SET NULL ON UPDATE CASCADE;
