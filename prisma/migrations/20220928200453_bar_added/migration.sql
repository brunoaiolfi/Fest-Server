/*
  Warnings:

  - You are about to drop the `Marker` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Marker" DROP CONSTRAINT "Marker_userId_fkey";

-- DropTable
DROP TABLE "Marker";

-- CreateTable
CREATE TABLE "Bar" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "opened_at_days" TEXT[],
    "open_hour" TEXT,
    "close_hour" TEXT,
    "adress" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "number" INTEGER,
    "complement" TEXT,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Bar_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Bar" ADD CONSTRAINT "Bar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
