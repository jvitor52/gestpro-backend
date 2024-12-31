import { Router } from 'express';
import empresaRouter from './empresa.routes';
import estadoRouter from './estado.routes';
import userRouter from './user.routes';

const router = Router();

router.use('/user', userRouter);
router.use('/estado', estadoRouter);
router.use('/empresa', empresaRouter);

export default router;
