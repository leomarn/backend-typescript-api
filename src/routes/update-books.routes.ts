import { PrismaClient } from '@prisma/client';
import { Router } from 'express';

const prisma = new PrismaClient();
const updateBooks = Router();

updateBooks.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { author, title, price } = req.body;


  if (!id) {
    return res.status(400).json('deve conter um id');
  }

  const idFind = await prisma.books.findUnique({ where: { id } });

  if (!idFind) {
    return res.status(404).json('deve conter id válido');
  }

  const books = await prisma.books.update({
    where: {
      id,
    },
    data: {
      author,
      title,
      price
    },
  });

  return res.status(200).json(books);
});

export default updateBooks