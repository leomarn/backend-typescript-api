import { PrismaClient } from '@prisma/client';
import { Router } from 'express';

const routes = Router();
const prisma = new PrismaClient();

routes.post('/products', async (req, res) => {
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

routes.get('/products', async (req, res) => {
  const findAllBooks = await prisma.books.findMany({ orderBy: { id: 'asc' } });
  return res.status(200).json(findAllBooks);
});

routes.put('/products/:id', async (req, res) => {
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

routes.delete('/products/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  if (!id) {
    return res.status(400).json('dever conter um id');
  }

  const idFind = await prisma.books.findUnique({ where: { id } });

  if (!idFind) {
    return res.status(404).json('deve conter id válido ');
  }

  await prisma.books.delete({ where: { id } });

  return res.status(200).send('Produto deletado com sucesso!')
});

export default routes;