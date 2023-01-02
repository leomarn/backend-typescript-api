/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Books" (
    "id" SERIAL NOT NULL,
    "author" TEXT,
    "title" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Books_title_key" ON "Books"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Books_price_key" ON "Books"("price");
