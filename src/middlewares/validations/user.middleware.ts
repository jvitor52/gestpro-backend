import { celebrate, Joi } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

const login = celebrate(
  {
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  },
  {
    abortEarly: false,
    messages,
  }
);

const create = celebrate(
  {
    body: Joi.object().keys({
      nome: Joi.string().required(),
      email: Joi.string().email().required(),
      senha: Joi.string().min(6).required(),
      empresa_id: Joi.number().not(null).required(),
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
      nome: Joi.string().required(),
      email: Joi.string().email().required(),
      senha: Joi.string().min(6).required(),
      empresa_id: Joi.number().not(null).required(),
    }),
  },
  {
    abortEarly: false,
    messages,
  }
);

const reset = celebrate(
  {
    params: Joi.object().keys({
      email: Joi.string().email().required(),
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

const refreshToken = celebrate(
  {
    body: Joi.object().keys({
      refresh_token: Joi.string().required(),
    }),
  },
  {
    abortEarly: false,
    messages,
  }
);

export default {
  login,
  create,
  update,
  reset,
  del,
  refreshToken,
  getPagination,
  getById,
};
