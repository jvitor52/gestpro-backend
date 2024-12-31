import { category } from '@prisma/client';
import { NotFoundException } from '../exceptions/api.exception';
import ModuleRepository from '../repositories/module.repository';

class ModuleService {
  create = async (
    uid_user: string,
    payload: Omit<category, 'id' | 'created_at' | 'updated_at'>
  ) => {
    return await ModuleRepository.create(uid_user, payload.name);
  };

  update = async (
    id: number,
    payload: Omit<category, 'id' | 'created_at' | 'updated_at'>
  ) => {
    const existModule = await ModuleRepository.getById(id);

    if (!existModule) {
      throw new NotFoundException('Module not exist');
    }

    return await ModuleRepository.update(id, payload.name);
  };

  del = async (id: number) => {
    const module = await ModuleRepository.getById(id);

    if (!module) {
      throw new NotFoundException('Module not exist');
    }

    return await ModuleRepository.delById(id);
  };

  get = async () => {
    return await ModuleRepository.get();
  };

  getPagination = async (query: { q: string; take: number; skip: number }) => {
    return await ModuleRepository.getPagination(
      query.q,
      Number(query.take),
      Number(query.skip)
    );
  };
}

export default new ModuleService();
