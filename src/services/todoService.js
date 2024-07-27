const todoRepository = require('../repositories/todoRepository');

exports.getAllTodos = (userId) => {
  return todoRepository.findAll(userId);
};

exports.createTodo = (userId, todoData) => {
  return todoRepository.create(userId, todoData);
};

exports.getTodoById = (userId, id) => {
  return todoRepository.findById(userId, id);
};

exports.updateTodo = (userId, id, todoData) => {
  return todoRepository.updateById(userId, id, todoData);
};

exports.deleteTodo = (userId, id) => {
  return todoRepository.deleteById(userId, id);
};
