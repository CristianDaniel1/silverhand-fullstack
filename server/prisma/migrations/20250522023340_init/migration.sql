-- CreateEnum
CREATE TYPE "instrument_category" AS ENUM ('guitarra', 'contrabaixo', 'violao');

-- CreateTable
CREATE TABLE "instrument" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "string_num" INTEGER NOT NULL,
    "quant" INTEGER NOT NULL,
    "image" TEXT,
    "category" "instrument_category" NOT NULL,

    CONSTRAINT "instrument_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "instrument_name_key" ON "instrument"("name");
