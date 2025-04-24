import { PrismaClient } from "../generated/prisma/index.js"

const prisma = new PrismaClient()

const chapterList = [
  'Colorado',
  'Atlanta',
  'Virginia',
  'Gettysburg',
  'Wisconsin',
  'Chicago',
  'Minnesota',
  'New Hampshire',
  'NEPA'
]

const chapters = async () => {
  for (const chapter of chapterList) {
    await prisma.chapter.upsert({
      where: {
        name: chapter,
      },
      update: {},
      create: {
        name: chapter
      },
    })
  }
}

const seed = async () => {
  await chapters();
}

seed()
  .then(async () => {
    console.log("seed complete")
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })