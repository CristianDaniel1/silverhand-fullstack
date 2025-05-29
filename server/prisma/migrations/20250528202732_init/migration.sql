/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `instrument` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "instrument_category" AS ENUM ('guitarra', 'contrabaixo', 'violao');

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "instrument";

-- DropEnum
DROP TYPE "InstrumentCategory";

-- CreateTable
CREATE TABLE "instruments" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "string_num" INTEGER NOT NULL,
    "quant" INTEGER NOT NULL,
    "image" TEXT,
    "category" "instrument_category" NOT NULL,

    CONSTRAINT "instruments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" VARCHAR(14) NOT NULL,
    "phone_number" VARCHAR(15),
    "password" TEXT NOT NULL,
    "zip_code" VARCHAR(9) NOT NULL,
    "address" TEXT NOT NULL,
    "profile_pic" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER_ROLE',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "instruments_name_key" ON "instruments"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");
