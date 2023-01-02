import { PrismaClient } from '@prisma/client';
import { Router } from 'express';

const prisma = new PrismaClient();
const readBooks = Router();

readBooks.get('/', async (req, res) => {
  const findAllBooks = await prisma.books.findMany({ orderBy: { id: 'asc' } });
  return res.status(200).json(findAllBooks);
});

export default readBooks