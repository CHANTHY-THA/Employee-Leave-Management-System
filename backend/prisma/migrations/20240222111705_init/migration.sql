/*
  Warnings:

  - You are about to drop the column `description` on the `PreData` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `PreData` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PreData" DROP COLUMN "description",
DROP COLUMN "type";
