import { Router } from 'express';
import userController from '../controllers/user.controller';
import userMiddleware from '../middlewares/validations/user.middleware';
const appRouter = Router();

appRouter.post('/login', userMiddleware.login, userController.login);
appRouter.post(
  '/refreshToken',
  userMiddleware.refreshToken,
  userController.refreshToken
);

//appRouter.use(authMiddleware.AuthMiddleware);
appRouter.get(
  '/pagination?:q',
  userMiddleware.getPagination,
  userController.getPagination
);
appRouter.get('/:id', userMiddleware.getById, userController.getById);
appRouter.get('/active', userController.getActive);
appRouter.post('/', userMiddleware.create, userController.create);
appRouter.put('/:id', userMiddleware.update, userController.update);
appRouter.put('/reset/:email', userMiddleware.reset, userController.reset);
appRouter.delete('/:id', userMiddleware.del, userController.del);
export default appRouter;
