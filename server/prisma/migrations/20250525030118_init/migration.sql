-- CreateEnum
CREATE TYPE "InstrumentCategory" AS ENUM ('guitarra', 'contrabaixo', 'violao');

-- CreateTable
CREATE TABLE "instrument" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "stringNum" INTEGER NOT NULL,
    "quant" INTEGER NOT NULL,
    "image" TEXT,
    "category" "InstrumentCategory" NOT NULL,

    CONSTRAINT "instrument_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "instrument_name_key" ON "instrument"("name");
