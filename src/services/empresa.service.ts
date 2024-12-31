import {
  ConflictException,
  NotFoundException,
} from '../exceptions/api.exception';
import empresaRepository from '../repositories/empresa.repository';

interface UserLogin {
  email: string;
  password: string;
}

interface CadastrarEmpresa {
  razao_social: string;
  nome_fantasia: string;
  cpf_cnpj: string;
  endereco: string;
  email: string;
  telefone: string;
  celular: string;
  estado_id: number;
  cidade_id: number;
}

interface AlterarEmpresa {
  razao_social: string;
  nome_fantasia: string;
  cpf_cnpj: string;
  endereco: string;
  email: string;
  telefone: string;
  celular: string;
  estado_id: number;
  cidade_id: number;
}

interface RefreshToken {
  refresh_token: string;
}

class EmpresaService {
  create = async (payload: CadastrarEmpresa) => {
    const empresa: any = await empresaRepository.getByCpfCnpj(payload.cpf_cnpj);

    if (empresa) {
      throw new ConflictException('Empresa já cadastrada');
    }

    const empresaCadastrada = await empresaRepository.create(
      payload.razao_social,
      payload.nome_fantasia,
      payload.cpf_cnpj,
      payload.endereco,
      payload.email,
      payload.telefone,
      payload.celular,
      payload.estado_id,
      payload.cidade_id
    );

    return empresaCadastrada;
  };

  update = async (id: number, payload: AlterarEmpresa) => {
    const empresa: any = await empresaRepository.getById(id);

    if (!empresa) {
      throw new ConflictException('Empresa não existe');
    }

    const empresaAlterada = await empresaRepository.update(
      id,
      payload.razao_social,
      payload.nome_fantasia,
      payload.cpf_cnpj,
      payload.endereco,
      payload.email,
      payload.telefone,
      payload.celular,
      payload.estado_id,
      payload.cidade_id
    );

    return empresaAlterada;
  };

  del = async (id: number) => {
    const existeEmpresa = await empresaRepository.getById(id);

    if (!existeEmpresa) {
      throw new NotFoundException('Empresa não encontrada');
    }

    return await empresaRepository.delById(id);
  };

  getById = async (id: number) => {
    return await empresaRepository.getById(id);
  };

  getByCpfCnpj = async (cpf_cnpj: string) => {
    return await empresaRepository.getByCpfCnpj(cpf_cnpj);
  };

  getActive = async () => {
    return await empresaRepository.getActive();
  };

  getPagination = async (query: { q: string; take: number; skip: number }) => {
    return await empresaRepository.getPagination(
      query.q,
      Number(query.take),
      Number(query.skip)
    );
  };
}

export default new EmpresaService();
