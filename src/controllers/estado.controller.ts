import { RequestHandler } from 'express';
import estadoService from '../services/estado.service';
import Controller from './controller';

class EstadoController extends Controller {
  create: RequestHandler = async (request, response) => {
    try {
      const { body } = request;
      const userCreated = await estadoService.create(body);

      return this.makeResponse(response, userCreated);
    } catch (error: any) {
      return this.makeResponse(response, error.message, error.statusCode);
    }
  };

  update: RequestHandler = async (request, response) => {
    try {
      const { params, body } = request;
      const user = await estadoService.update(Number(params.id), body);

      return this.makeResponse(response, user);
    } catch (error: any) {
      return this.makeResponse(response, error.message, error.statusCode);
    }
  };

  del: RequestHandler = async (request, response) => {
    try {
      const { params } = request;

      const data = await estadoService.del(Number(params.id));

      return this.makeResponse(response, data);
    } catch (error: any) {
      return this.makeResponse(response, error.message, error.statusCode);
    }
  };

  getById: RequestHandler = async (request, response) => {
    try {
      const data = await estadoService.getById(Number(request.params.id));

      return this.makeResponse(response, data);
    } catch (error: any) {
      return this.makeResponse(response, error.message, error.statusCode);
    }
  };

  getActive: RequestHandler = async (request, response) => {
    try {
      const data = await estadoService.getActive();

      return this.makeResponse(response, data);
    } catch (error: any) {
      return this.makeResponse(response, error.message, error.statusCode);
    }
  };

  getPagination: RequestHandler = async (request, response) => {
    try {
      const data = await estadoService.getPagination(request.query as any);

      return this.makeResponse(response, data);
    } catch (error: any) {
      return this.makeResponse(response, error.message, error.statusCode);
    }
  };
}

export default new EstadoController();
