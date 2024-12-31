import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import moment from 'moment';
import prisma from '../configs/prisma.config';
import { UnexpectedException } from '../exceptions/api.exception';

class EstadoRepository {
  create = async (nome: string, sigla: string) => {
    try {
      return await prisma.estado.create({
        data: {
          nome,
          sigla,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new UnexpectedException(error.message);
      }
    }
  };

  update = async (id: number, nome: string, sigla: string) => {
    try {
      return await prisma.estado.update({
        where: {
          id,
        },
        data: {
          nome,
          sigla,
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
      return await prisma.estado.findFirst({
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
      await prisma.estado.delete({
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
      return await prisma.estado.findMany({ where: { ativo: true } });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new UnexpectedException(error.message);
      }
    }
  };

  getByNome = async (nome: string) => {
    try {
      return await prisma.estado.findFirst({ where: { nome } });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new UnexpectedException(error.message);
      }
    }
  };

  getPagination = async (q: string, take: number, skip: number) => {
    try {
      const [total, data] = await prisma.$transaction([
        prisma.estado.aggregate({
          _count: { id: true },
          where: {
            OR: [
              { nome: { contains: q, mode: 'insensitive' } },
              { sigla: { contains: q, mode: 'insensitive' } },
            ],
          },
        }),
        prisma.estado.findMany({
          where: {
            OR: [
              { nome: { contains: q, mode: 'insensitive' } },
              { sigla: { contains: q, mode: 'insensitive' } },
            ],
          },
          take,
          skip,
          orderBy: {
            nome: 'asc',
          },
        }),
      ]);

      return { total: total._count.id, data: data };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new UnexpectedException(error.message);
      }
    }
  };
}

export default new EstadoRepository();
