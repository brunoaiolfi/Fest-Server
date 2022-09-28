/*
  Warnings:

  - You are about to drop the `Coordinate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `coordinate_id` on the `Marker` table. All the data in the column will be lost.
  - Added the required column `latitude` to the `Marker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Marker` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Coordinate";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Marker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "zip" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "complement" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Marker_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Marker" ("complement", "id", "number", "userId", "zip") SELECT "complement", "id", "number", "userId", "zip" FROM "Marker";
DROP TABLE "Marker";
ALTER TABLE "new_Marker" RENAME TO "Marker";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
