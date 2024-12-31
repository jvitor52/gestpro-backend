import prisma from '../../configs/prisma.config';
import { UnexpectedException } from '../../exceptions/api.exception';
import UserRepository from '../../repositories/user.repository';

jest.mock('../../configs/prisma.config', () => ({
  user: {
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
}));

describe('UserRepository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should call create method with the correct structure', async () => {
      const mockUser = {
        data: {
          email: 'teste3@yahoo.com.br',
          name: 'user123',
          uid_keycloak: '123456',
          user_status: {
            create: {
              status: 'Ativo',
            },
          },
        },
      };

      (prisma.user.create as jest.Mock).mockResolvedValue(mockUser);

      await UserRepository.create(
        'user123',
        'teste3@yahoo.com.br',
        '123456',
        1,
        2
      );

      expect(prisma.user.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            email: expect.any(String),
            name: expect.any(String),
            uid_keycloak: expect.any(String),
            user_status: expect.objectContaining({
              create: expect.objectContaining({
                status: expect.any(String),
              }),
            }),
          }),
        })
      );
    });

    it('should throw UnexpectedException on Prisma error', async () => {
      const mockError = new Error();

      (prisma.user.create as jest.Mock).mockRejectedValue(mockError);

      try {
        await UserRepository.create(
          'user123',
          'teste3@yahoo.com.br',
          '123456',
          1,
          2
        );
      } catch (error) {
        expect(error).toBeInstanceOf(UnexpectedException);
      }

      expect(prisma.user.create).toHaveBeenCalled();
    });

    it('should throw UnexpectedException on Prisma error', async () => {
      const mockError = new Error();

      (prisma.user.create as jest.Mock).mockRejectedValue(mockError);

      try {
        await UserRepository.create(
          'user123',
          'teste3@yahoo.com.br',
          '123456',
          1,
          2
        );
      } catch (error) {
        expect(error).toBeInstanceOf(UnexpectedException);
      }

      expect(prisma.user.create).toHaveBeenCalled();
    });

    it('should throw UnexpectedException on Prisma error', async () => {
      const mockError = new Error();

      (prisma.user.create as jest.Mock).mockRejectedValue(mockError);

      try {
        await UserRepository.create(
          'user123',
          'teste3@yahoo.com.br',
          '123456',
          1,
          2
        );
      } catch (error) {
        expect(error).toBeInstanceOf(UnexpectedException);
      }

      expect(prisma.user.create).toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      const mockUpdatedUser = {
        uid: '1',
        name: 'updated user',
        email: 'teste3@yahoo.com.br',
        updated_at: new Date(),
      };

      (prisma.user.update as jest.Mock).mockResolvedValue(mockUpdatedUser);

      const result = await UserRepository.update(
        '1',
        'updated user',
        'teste3@yahoo.com.br',
        1,
        2
      );

      expect(result).toEqual(mockUpdatedUser);
      expect(prisma.user.update).toHaveBeenCalledWith({
        where: { uid: '1' },
        data: {
          name: 'updated user',
          email: 'teste3@yahoo.com.br',
          updated_at: expect.any(Date),
        },
      });
    });

    it('should throw UnexpectedException on Prisma error', async () => {
      const mockError = new Error();

      (prisma.user.update as jest.Mock).mockRejectedValue(mockError);

      try {
        await UserRepository.update(
          '1',
          'updated user',
          'teste3@yahoo.com.br',
          1,
          2
        );
      } catch (error) {
        expect(error).toBeInstanceOf(UnexpectedException);
      }

      expect(prisma.user.update).toHaveBeenCalled();
    });
  });

  describe('delById', () => {
    it('should delete a user by ID', async () => {
      const mockDeleteResult = { uid: '1' };

      (prisma.user.delete as jest.Mock).mockResolvedValue(mockDeleteResult);

      const result = await UserRepository.delById('1');

      expect(result).toEqual(true);
      expect(prisma.user.delete).toHaveBeenCalledWith({
        where: { uid: '1' },
      });
    });

    it('should throw UnexpectedException on Prisma error', async () => {
      const mockError = new Error();

      (prisma.user.delete as jest.Mock).mockRejectedValue(mockError);

      try {
        await UserRepository.delById('1');
      } catch (error) {
        expect(error).toBeInstanceOf(UnexpectedException);
      }

      expect(prisma.user.delete).toHaveBeenCalled();
    });
  });
});
