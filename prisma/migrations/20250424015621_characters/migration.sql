-- AlterTable
ALTER TABLE "User" ADD COLUMN     "signInCount" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "characterClass" TEXT NOT NULL,
    "startingXp" DECIMAL(10,1) NOT NULL DEFAULT 25.0,
    "primarySchool" TEXT,
    "raceName" TEXT,
    "subrace" TEXT,
    "undoXp" DECIMAL(10,1) NOT NULL DEFAULT 0.0,
    "discardedAt" TIMESTAMP(3),
    "userId" INTEGER NOT NULL,
    "chapterId" INTEGER NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "Chapter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
