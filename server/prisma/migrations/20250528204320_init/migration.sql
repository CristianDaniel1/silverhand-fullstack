/*
  Warnings:

  - The `phone_number` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `cpf` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `zip_code` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "cpf",
ADD COLUMN     "cpf" INTEGER NOT NULL,
DROP COLUMN "phone_number",
ADD COLUMN     "phone_number" INTEGER,
DROP COLUMN "zip_code",
ADD COLUMN     "zip_code" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");
