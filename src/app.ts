import { errors } from 'celebrate';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../swagger.json';
import ErrorHandlerMiddleware from './middlewares/error_handler.middleware';
import RequestLogMiddleware from './middlewares/request_log.middleware';
import routes from './routes';

const app = express();

app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));
app.use(helmet());
app.use(cors());
app.use(RequestLogMiddleware as any);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(routes);
app.use(ErrorHandlerMiddleware as any);

app.get('*', function (req, res) {
  res.status(404).send({ errors: [{ message: 'Route not found', code: 404 }] });
});
app.use(errors());

export default app;
