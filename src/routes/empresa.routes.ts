import { Router } from 'express';
import empresaController from '../controllers/empresa.controller';
import empresaMiddleware from '../middlewares/validations/empresa.middleware';
const appRouter = Router();

//appRouter.use(authMiddleware.AuthMiddleware);
appRouter.get(
  '/pagination?:q',
  empresaMiddleware.getPagination,
  empresaController.getPagination
);
appRouter.get('/:id', empresaMiddleware.getById, empresaController.getById);
appRouter.get('/active', empresaController.getActive);
appRouter.post('/', empresaMiddleware.create, empresaController.create);
appRouter.put('/:id', empresaMiddleware.update, empresaController.update);
appRouter.delete('/:id', empresaMiddleware.del, empresaController.del);
export default appRouter;
