/*
  Warnings:

  - Made the column `userId` on table `Marker` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Marker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "zip" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "complement" TEXT NOT NULL,
    "coordinate_id" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Marker_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Marker_coordinate_id_fkey" FOREIGN KEY ("coordinate_id") REFERENCES "Coordinate" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Marker" ("complement", "coordinate_id", "id", "number", "userId", "zip") SELECT "complement", "coordinate_id", "id", "number", "userId", "zip" FROM "Marker";
DROP TABLE "Marker";
ALTER TABLE "new_Marker" RENAME TO "Marker";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
