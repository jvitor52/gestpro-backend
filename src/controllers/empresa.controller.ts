import { RequestHandler } from 'express';
import empresaService from '../services/empresa.service';
import Controller from './controller';

class EmpresaController extends Controller {
  create: RequestHandler = async (request, response) => {
    try {
      const { body } = request;
      const userCreated = await empresaService.create(body);

      return this.makeResponse(response, userCreated);
    } catch (error: any) {
      return this.makeResponse(response, error.message, error.statusCode);
    }
  };

  update: RequestHandler = async (request, response) => {
    try {
      const { params, body } = request;
      const user = await empresaService.update(Number(params.id), body);

      return this.makeResponse(response, user);
    } catch (error: any) {
      return this.makeResponse(response, error.message, error.statusCode);
    }
  };

  del: RequestHandler = async (request, response) => {
    try {
      const { params } = request;

      const data = await empresaService.del(Number(params.uid));

      return this.makeResponse(response, data);
    } catch (error: any) {
      return this.makeResponse(response, error.message, error.statusCode);
    }
  };

  getById: RequestHandler = async (request, response) => {
    try {
      const data = await empresaService.getById(Number(request.params.uid));

      return this.makeResponse(response, data);
    } catch (error: any) {
      return this.makeResponse(response, error.message, error.statusCode);
    }
  };

  getByCpfCnpj: RequestHandler = async (request, response) => {
    try {
      const data = await empresaService.getByCpfCnpj(request.params.cpf_cnpj);

      return this.makeResponse(response, data);
    } catch (error: any) {
      return this.makeResponse(response, error.message, error.statusCode);
    }
  };

  getActive: RequestHandler = async (request, response) => {
    try {
      const data = await empresaService.getActive();

      return this.makeResponse(response, data);
    } catch (error: any) {
      return this.makeResponse(response, error.message, error.statusCode);
    }
  };

  getPagination: RequestHandler = async (request, response) => {
    try {
      const data = await empresaService.getPagination(request.query as any);

      return this.makeResponse(response, data);
    } catch (error: any) {
      return this.makeResponse(response, error.message, error.statusCode);
    }
  };
}

export default new EmpresaController();
