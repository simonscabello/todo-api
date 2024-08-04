const Todo = require('../models/todo');

exports.create = async (userId, todoData) => {
  return await Todo.create({ ...todoData, userId });
};

exports.findAll = async (userId, { page, limit }) => {
  const offset = (page - 1) * limit;
  const todos = await Todo.findAll({
    where: { userId },
    limit,
    offset,
    include: ['list'],
  });
  const total = await Todo.count({ where: { userId } });
  return { todos, total };
};

exports.findById = async (userId, id) => {
  return await Todo.findOne({ where: { id, userId }, include: ['list'] });
};

exports.updateById = async (userId, id, todoData) => {
  const todo = await Todo.findOne({ where: { id, userId } });
  if (todo) {
    return await todo.update(todoData);
  }
  return null;
};

exports.deleteById = async (userId, id) => {
  const todo = await Todo.findOne({ where: { id, userId } });
  if (todo) {
    await todo.destroy();
    return todo;
  }
  return null;
};
