-- AlterTable
ALTER TABLE "Leave" ALTER COLUMN "approveBy" SET DEFAULT '',
ALTER COLUMN "approveDate" DROP NOT NULL,
ALTER COLUMN "approveDate" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "remark" SET DEFAULT '';
