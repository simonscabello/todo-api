const Todo = require('../models/todo');

exports.findAll = async (userId, { limit, offset }) => {
  const { count, rows } = await Todo.findAndCountAll({
    where: { userId },
    limit,
    offset,
  });
  return {
    total: count,
    todos: rows,
  };
};

exports.create = async (userId, todoData) => {
  return await Todo.create({ ...todoData, userId });
};

exports.findById = async (userId, id) => {
  return await Todo.findOne({ where: { id, userId } });
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
