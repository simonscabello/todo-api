const Joi = require('joi');

const todoSchema = Joi.object({
  title: Joi.string().min(3).max(255).required(),
  description: Joi.string().max(1024).optional(),
  completed: Joi.boolean().optional(),
  listId: Joi.number().integer().optional(),
});

const idSchema = Joi.object({
  id: Joi.number().integer().required(),
});

module.exports = {
  todoSchema,
  idSchema,
};
