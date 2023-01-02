import { Router } from 'express';
import creatBooks from './create-books.routes';
import deleteBooks from './delete-books.routes';
import readBooks from './read-books.routes';
import updateBooks from './update-books.routes';


const routes = Router()

routes.use('/products', creatBooks)
routes.use('/products', readBooks)
routes.use('/products', updateBooks)
routes.use('/products', deleteBooks)

export default routes;