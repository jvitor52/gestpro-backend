import { Router } from 'express';
import estadoController from '../controllers/estado.controller';
import estadoMiddleware from '../middlewares/validations/estado.middleware';
const appRouter = Router();

//appRouter.use(authMiddleware.AuthMiddleware);
appRouter.get(
  '/pagination?:q',
  estadoMiddleware.getPagination,
  estadoController.getPagination
);
appRouter.get('/active', estadoController.getActive);
appRouter.get('/:id', estadoMiddleware.getById, estadoController.getById);
appRouter.post('/', estadoMiddleware.create, estadoController.create);
appRouter.put('/:id', estadoMiddleware.update, estadoController.update);
appRouter.delete('/:id', estadoMiddleware.del, estadoController.del);
export default appRouter;
