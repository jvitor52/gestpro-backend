import { Response } from 'express';

export default class Controller {
  protected makeResponse(response: Response, data: any, status: number = 200) {
    return response.status(status).json(data);
  }
}
