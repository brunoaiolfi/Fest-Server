/*
  Warnings:

  - Made the column `open_hour` on table `Bar` required. This step will fail if there are existing NULL values in that column.
  - Made the column `close_hour` on table `Bar` required. This step will fail if there are existing NULL values in that column.
  - Made the column `number` on table `Bar` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Bar" ALTER COLUMN "open_hour" SET NOT NULL,
ALTER COLUMN "close_hour" SET NOT NULL,
ALTER COLUMN "number" SET NOT NULL;
