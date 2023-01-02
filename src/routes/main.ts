import { Router } from 'express';
import creatBooks from './create-books.routes';
import deleteBooks from './delete-books.routes';
import readBooks from './read-books.routes';
import updateBooks from './update-books.routes';


const routes = Router()

routes.use('/products', creatBooks, readBooks, updateBooks, deleteBooks)

export default routes;