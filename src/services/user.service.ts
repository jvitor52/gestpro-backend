import {
  ConflictException,
  NotFoundException,
  UnauthorizedException,
  UnexpectedException,
} from '../exceptions/api.exception';
import keycloakIntegration from '../integrations/keycloak.integration';
import userRepository from '../repositories/user.repository';

interface UserLogin {
  email: string;
  password: string;
}

interface UserCreate {
  uid: string;
  nome: string;
  email: string;
  senha: string;
  empresa_id: number;
}

interface UserUpdate {
  uid: string;
  nome: string;
  email: string;
  senha: string;
  empresa_id: number;
}

interface RefreshToken {
  refresh_token: string;
}

class UserService {
  login = async (payload: UserLogin) => {
    const user = await userRepository.getByEmail(payload.email);

    if (!user) {
      throw new UnauthorizedException('User not exist');
    }

    /* const status = user.user_status[0].status;

    if (status !== 'Ativo') {
      throw new ConflictException('User not active');
    }

    const token: any = await keycloakIntegration.authenticate(payload);

    if (token?.status || token?.statusCode) {
      throw new UnauthorizedException(token.error_description || token.message);
    }

    return { user, token }; */

    return '';
  };

  create = async (payload: UserCreate) => {
    const user: any = await userRepository.getByEmail(payload.email);

    if (user) {
      throw new ConflictException('Email exist');
    }

    /* const createdUserKeycloak = await keycloakIntegration.create(
      payload.name,
      payload.email,
      payload.password
    );

    if (!createdUserKeycloak?.id) {
      throw new ConflictException(createdUserKeycloak.message);
    } */

    const userCreated = await userRepository.create(
      'asd132',
      payload.nome,
      payload.email,
      payload.senha,
      payload.empresa_id
    );

    return userCreated;
  };

  update = async (id: string, payload: UserUpdate) => {
    const user: any = await userRepository.getById(id);

    if (!user) {
      throw new ConflictException('User not exist');
    }

    const userUpdated = await userRepository.update(
      id,
      payload.uid,
      payload.nome,
      payload.email,
      payload.senha,
      payload.empresa_id
    );

    return userUpdated;
  };

  reset = async (email: string) => {
    const user: any = await userRepository.getByEmail(email);

    if (!user) {
      throw new ConflictException('User not exist');
    }

    const resetUserKeycloak = await keycloakIntegration.reset(
      user.uid_keycloak,
      email
    );

    if (resetUserKeycloak !== 204) {
      throw new UnexpectedException('Error sending email with password change');
    }

    return true;
  };

  del = async (uid: string) => {
    const existUser = await userRepository.getById(uid);

    if (existUser) {
      throw new NotFoundException('User not exist');
    }

    return true;
  };

  getById = async (uid: string) => {
    return await userRepository.getById(uid);
  };

  getActive = async () => {
    return await userRepository.getActive();
  };

  getPagination = async (query: { q: string; take: number; skip: number }) => {
    return await userRepository.getPagination(
      query.q,
      Number(query.take),
      Number(query.skip)
    );
  };

  refreshToken = async (payload: RefreshToken) => {
    const token = await keycloakIntegration.refreshToken(payload.refresh_token);
    return token;
  };
}

export default new UserService();
