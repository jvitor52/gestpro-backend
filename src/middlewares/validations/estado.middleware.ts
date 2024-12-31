import { celebrate, Joi } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

const create = celebrate(
  {
    body: Joi.object().keys({
      nome: Joi.string().required(),
      sigla: Joi.string().required(),
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
      sigla: Joi.string().required(),
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
