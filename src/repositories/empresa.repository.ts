import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import moment from 'moment';
import prisma from '../configs/prisma.config';
import { UnexpectedException } from '../exceptions/api.exception';

class EmpresaRepository {
  create = async (
    razao_social: string,
    nome_fantasia: string,
    cpf_cnpj: string,
    endereco: string,
    email: string,
    telefone: string,
    celular: string,
    estado_id: number,
    cidade_id: number
  ) => {
    try {
      return await prisma.empresa.create({
        data: {
          razao_social,
          nome_fantasia,
          cpf_cnpj,
          endereco,
          email,
          telefone,
          celular,
          estado_id,
          cidade_id,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new UnexpectedException(error.message);
      }
    }
  };

  update = async (
    id: number,
    razao_social: string,
    nome_fantasia: string,
    cpf_cnpj: string,
    endereco: string,
    email: string,
    telefone: string,
    celular: string,
    estado_id: number,
    cidade_id: number
  ) => {
    try {
      return await prisma.empresa.update({
        where: {
          id,
        },
        data: {
          razao_social,
          nome_fantasia,
          cpf_cnpj,
          endereco,
          email,
          telefone,
          celular,
          estado_id,
          cidade_id,
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
      return await prisma.empresa.findFirst({
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

  getByCpfCnpj = async (cpf_cnpj: string) => {
    try {
      return await prisma.empresa.findFirst({
        where: {
          cpf_cnpj,
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
      await prisma.empresa.delete({
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
      return await prisma.empresa.findMany({ where: { ativo: true } });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new UnexpectedException(error.message);
      }
    }
  };

  getPagination = async (q: string, take: number, skip: number) => {
    try {
      const [total, data] = await prisma.$transaction([
        prisma.empresa.aggregate({
          _count: { id: true },
          where: {
            OR: [
              { nome_fantasia: { contains: q, mode: 'insensitive' } },
              { cpf_cnpj: { contains: q, mode: 'insensitive' } },
              { razao_social: { contains: q, mode: 'insensitive' } },
            ],
          },
        }),
        prisma.empresa.findMany({
          where: {
            OR: [
              { nome_fantasia: { contains: q, mode: 'insensitive' } },
              { cpf_cnpj: { contains: q, mode: 'insensitive' } },
              { razao_social: { contains: q, mode: 'insensitive' } },
            ],
          },
          take,
          skip,
          orderBy: {
            nome_fantasia: 'asc',
          },
        }),
      ]);

      const result: any[] = [];
      data.map((user: any) =>
        result.push({ ...user, status: user.user_status[0].status })
      );

      return { total: total._count.id, data: result };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new UnexpectedException(error.message);
      }
    }
  };
}

export default new EmpresaRepository();
