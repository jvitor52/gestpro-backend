import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import moment from 'moment';
import prisma from '../configs/prisma.config';
import { UnexpectedException } from '../exceptions/api.exception';

class ModuleRepository {
  create = async (uid_user: string, name: string) => {
    try {
      return await prisma.module.create({
        data: {
          uid_user,
          name,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new UnexpectedException(error.message);
      }
    }
  };

  update = async (id: number, name: string) => {
    try {
      return await prisma.module.update({
        where: {
          id,
        },
        data: {
          name,
          updated_at: moment().utcOffset(0).toDate(),
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new UnexpectedException(error.message);
      }
    }
  };

  getById = async (id: number) => {
    try {
      return await prisma.module.findFirst({
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

  delById = async (id: number) => {
    try {
      await prisma.module.delete({
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

  get = async () => {
    try {
      return await prisma.module.findMany();
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new UnexpectedException(error.message);
      }
    }
  };

  getPagination = async (q: string, take: number, skip: number) => {
    try {
      const [total, data] = await prisma.$transaction([
        prisma.module.aggregate({
          _count: { id: true },
          where: {
            name: { contains: q, mode: 'insensitive' },
          },
        }),
        prisma.module.findMany({
          where: {
            name: { contains: q, mode: 'insensitive' },
          },
          take,
          skip,
          orderBy: {
            name: 'asc',
          },
        }),
      ]);

      return { total: total._count.id, data };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new UnexpectedException(error.message);
      }
    }
  };
}

export default new ModuleRepository();
