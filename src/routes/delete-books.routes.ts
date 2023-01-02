import { PrismaClient } from '@prisma/client';
import { Router } from 'express';

const prisma = new PrismaClient();
const deleteBooks = Router();

deleteBooks.delete('/:id', async (req, res) => {
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

export default deleteBooks