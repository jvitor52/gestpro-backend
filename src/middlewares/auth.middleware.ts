import { NextFunction, Request, RequestHandler, Response } from 'express';
import keycloakIntegration from '../integrations/keycloak.integration';
import userRepository from '../repositories/user.repository';
// import userService from '../services/user.service';

const AuthMiddleware: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers.authorization;

  if (!authorization || !authorization.includes('Bearer')) {
    return res.status(401).send('Token not Provided');
  }

  const [, token] = authorization.split(' ');

  try {
    const response = await keycloakIntegration.checkToken(token);

    if (response.active) {
      const user: any = await userRepository.getByEmail(response.usename);

      req.uid = user?.uid as string;
      req.uid_keycloak = user?.uid_keycloak as string;
      req.email = user?.email as string;
      req.status = user?.user_status[0].status as string;

      next();
    } else {
      return res.status(401).send('Token Inactive');
    }
    return response.data;
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }
};

export default { AuthMiddleware };
