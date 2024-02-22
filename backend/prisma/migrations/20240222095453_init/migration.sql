/*
  Warnings:

  - Made the column `fromDate` on table `Leave` required. This step will fail if there are existing NULL values in that column.
  - Made the column `toDate` on table `Leave` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Leave" ALTER COLUMN "fromDate" SET NOT NULL,
ALTER COLUMN "fromDate" SET DATA TYPE TIMESTAMPTZ,
ALTER COLUMN "toDate" SET NOT NULL,
ALTER COLUMN "toDate" SET DATA TYPE TIMESTAMPTZ;
