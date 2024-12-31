import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import moment from 'moment';
import prisma from '../configs/prisma.config';
import { UnexpectedException } from '../exceptions/api.exception';

class UserRepository {
  create = async (
    uid: string,
    nome: string,
    email: string,
    senha: string,
    empresa_id: number
  ) => {
    try {
      return await prisma.usuario.create({
        data: {
          uid,
          nome,
          email,
          senha,
          empresa_id,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new UnexpectedException(error.message);
      }
    }
  };

  update = async (
    id: string,
    uid: string,
    nome: string,
    email: string,
    senha: string,
    empresa_id: number
  ) => {
    try {
      return await prisma.usuario.update({
        where: {
          id,
        },
        data: {
          uid,
          nome,
          email,
          senha,
          empresa_id,
          updated_at: moment().utcOffset(0).toDate(),
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new UnexpectedException(error.message);
      }
    }
  };

  getById = async (id: string) => {
    try {
      return await prisma.usuario.findFirst({
        where: {
          id,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new UnexpectedException(error.message);
      }
    }
  };

  getByEmail = async (email: string) => {
    try {
      return await prisma.usuario.findFirst({
        where: {
          email,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new UnexpectedException(error.message);
      }
    }
  };

  delById = async (id: string) => {
    try {
      await prisma.usuario.delete({
        where: {
          id,
        },
      });

      return true;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new UnexpectedException(error.message);
      }
    }
  };

  getActive = async () => {
    try {
      return await prisma.usuario.findMany({});
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new UnexpectedException(error.message);
      }
    }
  };

  getPagination = async (q: string, take: number, skip: number) => {
    try {
      const [total, data] = await prisma.$transaction([
        prisma.usuario.aggregate({
          _count: { uid: true },
          where: {
            OR: [
              { nome: { contains: q, mode: 'insensitive' } },
              { email: { contains: q, mode: 'insensitive' } },
            ],
          },
        }),
        prisma.usuario.findMany({
          where: {
            OR: [
              { nome: { contains: q, mode: 'insensitive' } },
              { email: { contains: q, mode: 'insensitive' } },
            ],
          },
          take,
          skip,
          orderBy: {
            nome: 'asc',
          },
        }),
      ]);

      const result: any[] = [];
      data.map((user: any) =>
        result.push({ ...user, status: user.user_status[0].status })
      );

      return { total: total._count.uid, data: result };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new UnexpectedException(error.message);
      }
    }
  };
}

export default new UserRepository();
