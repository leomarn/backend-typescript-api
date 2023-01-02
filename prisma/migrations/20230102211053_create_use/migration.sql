-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "author" TEXT,
    "title" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_title_key" ON "User"("title");

-- CreateIndex
CREATE UNIQUE INDEX "User_price_key" ON "User"("price");
