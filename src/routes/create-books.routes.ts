import { PrismaClient } from '@prisma/client';
import { Router } from 'express';

const prisma = new PrismaClient();
const creatBooks = Router();

creatBooks.post('/', async (req, res) => {
  const { author, title, price } = req.body;

  const book = await prisma.books.create({
    data: {
      author,
      title,
      price
    }
  })
  return res.status(201).json(book);
});

export default creatBooks