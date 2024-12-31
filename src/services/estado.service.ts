import {
  ConflictException,
  NotFoundException,
} from '../exceptions/api.exception';
import estadoRepository from '../repositories/estado.repository';

interface CadastrarEstado {
  nome: string;
  sigla: string;
}

interface AlterarEstado {
  nome: string;
  sigla: string;
}

interface RefreshToken {
  refresh_token: string;
}

class EstadoService {
  create = async (payload: CadastrarEstado) => {
    const estado: any = await estadoRepository.getByNome(payload.nome);
    console.log('estado == ', estado);
    if (estado) {
      throw new ConflictException('Estado já cadastrada');
    }

    const estadoCadastrada = await estadoRepository.create(
      payload.nome,
      payload.sigla
    );

    return estadoCadastrada;
  };

  update = async (id: number, payload: AlterarEstado) => {
    const estado: any = await estadoRepository.getById(id);

    if (!estado) {
      throw new ConflictException('Estado não existe');
    }

    const estadoAlterada = await estadoRepository.update(
      id,
      payload.nome,
      payload.sigla
    );

    return estadoAlterada;
  };

  del = async (id: number) => {
    const existeEstado = await estadoRepository.getById(id);

    if (!existeEstado) {
      throw new NotFoundException('Estado não encontrada');
    }

    return await estadoRepository.delById(id);
  };

  getById = async (id: number) => {
    return await estadoRepository.getById(id);
  };

  getActive = async () => {
    return await estadoRepository.getActive();
  };

  getPagination = async (query: { q: string; take: number; skip: number }) => {
    return await estadoRepository.getPagination(
      query.q,
      Number(query.take),
      Number(query.skip)
    );
  };
}

export default new EstadoService();
