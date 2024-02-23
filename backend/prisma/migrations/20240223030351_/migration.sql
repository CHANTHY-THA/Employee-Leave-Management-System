/*
  Warnings:

  - Added the required column `approveBy` to the `Leave` table without a default value. This is not possible if the table is not empty.
  - Added the required column `approveDate` to the `Leave` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remark` to the `Leave` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_departmentId_key";

-- AlterTable
ALTER TABLE "Leave" ADD COLUMN     "approveBy" TEXT NOT NULL,
ADD COLUMN     "approveDate" TIMESTAMPTZ NOT NULL,
ADD COLUMN     "remark" TEXT NOT NULL;
