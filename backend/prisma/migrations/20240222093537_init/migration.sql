-- AlterTable
ALTER TABLE "Leave" ALTER COLUMN "fromDate" DROP NOT NULL,
ALTER COLUMN "fromDate" SET DATA TYPE DATE,
ALTER COLUMN "toDate" DROP NOT NULL,
ALTER COLUMN "toDate" SET DATA TYPE DATE,
ALTER COLUMN "created" SET DATA TYPE DATE;
