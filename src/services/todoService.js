const todoRepository = require('../repositories/todoRepository');

exports.getAllTodos = async (userId, pagination) => {
  return await todoRepository.findAll(userId, pagination);
};

exports.createTodo = async (userId, todoData) => {
  return await todoRepository.create(userId, todoData);
};

exports.getTodoById = async (userId, id) => {
  return await todoRepository.findById(userId, id);
};

exports.updateTodo = async (userId, id, todoData) => {
  return await todoRepository.updateById(userId, id, todoData);
};

exports.deleteTodo = async (userId, id) => {
  return await todoRepository.deleteById(userId, id);
};
