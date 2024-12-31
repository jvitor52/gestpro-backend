import { RequestHandler } from 'express';
import userService from '../services/user.service';
import Controller from './controller';

class UserController extends Controller {
  login: RequestHandler = async (request, response) => {
    try {
      const { body } = request;
      const user = await userService.login(body);

      return this.makeResponse(response, user);
    } catch (error: any) {
      return this.makeResponse(response, error.message, error.statusCode);
    }
  };

  create: RequestHandler = async (request, response) => {
    try {
      const { body } = request;
      const userCreated = await userService.create(body);

      return this.makeResponse(response, userCreated);
    } catch (error: any) {
      return this.makeResponse(response, error.message, error.statusCode);
    }
  };

  update: RequestHandler = async (request, response) => {
    try {
      const { params, body } = request;
      const user = await userService.update(params.uid, body);

      return this.makeResponse(response, user);
    } catch (error: any) {
      return this.makeResponse(response, error.message, error.statusCode);
    }
  };

  reset: RequestHandler = async (request, response) => {
    try {
      const { params } = request;
      const user = await userService.reset(params.email);

      return this.makeResponse(response, user);
    } catch (error: any) {
      return this.makeResponse(response, error.message, error.statusCode);
    }
  };

  del: RequestHandler = async (request, response) => {
    try {
      const { params } = request;

      const data = await userService.del(params.uid);

      return this.makeResponse(response, data);
    } catch (error: any) {
      return this.makeResponse(response, error.message, error.statusCode);
    }
  };

  getById: RequestHandler = async (request, response) => {
    try {
      const data = await userService.getById(request.params.uid);

      return this.makeResponse(response, data);
    } catch (error: any) {
      return this.makeResponse(response, error.message, error.statusCode);
    }
  };

  getActive: RequestHandler = async (request, response) => {
    try {
      const data = await userService.getActive();

      return this.makeResponse(response, data);
    } catch (error: any) {
      return this.makeResponse(response, error.message, error.statusCode);
    }
  };

  getPagination: RequestHandler = async (request, response) => {
    try {
      const data = await userService.getPagination(request.query as any);

      return this.makeResponse(response, data);
    } catch (error: any) {
      return this.makeResponse(response, error.message, error.statusCode);
    }
  };

  refreshToken: RequestHandler = async (request, response) => {
    try {
      const { body } = request;
      const data = await userService.refreshToken(body);

      return this.makeResponse(response, data);
    } catch (error: any) {
      return this.makeResponse(response, error.message, error.statusCode);
    }
  };
}

export default new UserController();
