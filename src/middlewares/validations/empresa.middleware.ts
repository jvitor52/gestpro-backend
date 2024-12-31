import { celebrate, Joi } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

const create = celebrate(
  {
    body: Joi.object().keys({
      razao_social: Joi.string().required(),
      nome_fantasia: Joi.string().required(),
      cpf_cnpj: Joi.string().required(),
      endereco: Joi.string().required(),
      email: Joi.string().required(),
      telefone: Joi.string().required(),
      celular: Joi.string().required(),
      estado_id: Joi.number().not(null).required(),
      cidade_id: Joi.number().not(null).required(),
    }),
  },
  {
    abortEarly: false,
    messages,
  }
);

const update = celebrate(
  {
    params: Joi.object().keys({
      id: Joi.number().required(),
    }),
    body: Joi.object().keys({
      razao_social: Joi.string().required(),
      nome_fantasia: Joi.string().required(),
      cpf_cnpj: Joi.string().required(),
      endereco: Joi.string().required(),
      email: Joi.string().required(),
      telefone: Joi.string().required(),
      celular: Joi.string().required(),
      estado_id: Joi.number().not(null).required(),
      cidade_id: Joi.number().not(null).required(),
    }),
  },
  {
    abortEarly: false,
    messages,
  }
);

const del = celebrate(
  {
    params: Joi.object().keys({
      id: Joi.number().required(),
    }),
  },
  {
    abortEarly: false,
    messages,
  }
);

const getById = celebrate(
  {
    params: Joi.object().keys({
      id: Joi.number().required(),
    }),
  },
  {
    abortEarly: false,
    messages,
  }
);

const getPagination = celebrate(
  {
    query: Joi.object().keys({
      q: Joi.string().allow(''),
      take: Joi.string().required(),
      skip: Joi.string().required(),
    }),
  },
  {
    abortEarly: false,
    messages,
  }
);

export default {
  create,
  update,
  del,
  getPagination,
  getById,
};
