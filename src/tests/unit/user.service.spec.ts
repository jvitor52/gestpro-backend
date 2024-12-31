import {
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from '../../exceptions/api.exception';
import keycloakIntegration from '../../integrations/keycloak.integration';
import UserRepository from '../../repositories/user.repository';
import UserService from '../../services/user.service';

jest.mock('../../repositories/user.repository');
jest.mock('../../integrations/keycloak.integration');

describe('UserService', () => {
  const mockUser = {
    uid: '8596a543-a7fa-4104-8cae-abe1234a5284',
    uid_keycloak: '7491ecb9-d9f6-4ab1-bb96-149588b7f1a0',
    name: 'jvitor',
    email: 'jvitor70@yahoo.com.br',
    created_at: new Date(),
    updated_at: new Date(),
    user_status: [{ status: 'Ativo' }],
  };

  const mockToken = {
    access_token: 'mock_access_token',
    expires_in: 3600,
    refresh_expires_in: 1800,
    refresh_token: 'mock_refresh_token',
    token_type: 'Bearer',
    id_token: 'mock_id_token',
    session_state: 'mock_session_state',
    scope: 'openid profile email',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('login', () => {
    it('should authenticate user', async () => {
      (UserRepository.getByEmail as jest.Mock).mockResolvedValue(mockUser);
      (keycloakIntegration.authenticate as jest.Mock).mockResolvedValue(
        mockToken
      );

      const result = await UserService.login({
        email: 'jvitor70@yahoo.com.br',
        password: '1234080',
      });

      expect(result).toEqual({ user: mockUser, token: mockToken });
    });

    it('should throw UnauthorizedException if user does not exist', async () => {
      (UserRepository.getByEmail as jest.Mock).mockResolvedValue(null);

      await expect(
        UserService.login({
          email: 'nonexistent@example.com',
          password: 'password',
        })
      ).rejects.toThrow(UnauthorizedException);
    });

    it('should throw ConflictException if user is not active', async () => {
      const inactiveUser = {
        ...mockUser,
        user_status: [{ status: 'Inativo' }],
      };
      (UserRepository.getByEmail as jest.Mock).mockResolvedValue(inactiveUser);

      await expect(
        UserService.login({
          email: 'inactive@example.com',
          password: 'password',
        })
      ).rejects.toThrow(ConflictException);
    });
  });

  describe('update', () => {
    it('should update an existing user if it exists', async () => {
      (UserRepository.getById as jest.Mock).mockResolvedValue(mockUser);
      (keycloakIntegration.update as jest.Mock).mockResolvedValue({
        id: 'updated_id',
      });
      (UserRepository.update as jest.Mock).mockResolvedValue(mockUser);

      const result = await UserService.update(
        '8596a543-a7fa-4104-8cae-abe1234a5284',
        {
          name: 'Updated User',
          email: 'updated@example.com',
          status: 'Ativo',
          id_module: 1,
          id_participating_center: 2,
        }
      );

      expect(result).toEqual(mockUser);
      expect(UserRepository.update).toHaveBeenCalledWith(
        '8596a543-a7fa-4104-8cae-abe1234a5284',
        'Updated User',
        'updated@example.com'
      );
    });

    it('should throw ConflictException if user does not exist', async () => {
      (UserRepository.getById as jest.Mock).mockResolvedValue(null);

      await expect(
        UserService.update('nonexistent_uid', {
          name: 'Updated User',
          email: 'updated@example.com',
          status: 'Ativo',
          id_module: 1,
          id_participating_center: 2,
        })
      ).rejects.toThrow(ConflictException);
    });
  });

  describe('del', () => {
    it('should throw NotFoundException if user exists', async () => {
      (UserRepository.getById as jest.Mock).mockResolvedValue(mockUser);

      await expect(UserService.del('existing_uid')).rejects.toThrow(
        NotFoundException
      );
    });
  });
});
