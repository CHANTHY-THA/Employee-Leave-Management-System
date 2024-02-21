-- CreateTable
CREATE TABLE "PreData" (
    "id" SERIAL NOT NULL,
    "criterial" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "PreData_pkey" PRIMARY KEY ("id")
);
