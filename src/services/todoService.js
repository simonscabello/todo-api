const todoRepository = require('../repositories/todoRepository');

exports.getAllTodos = () => {
    return todoRepository.findAll();
};

exports.createTodo = (todoData) => {
    return todoRepository.create(todoData);
};

exports.getTodoById = (id) => {
    return todoRepository.findById(id);
};

exports.updateTodo = (id, todoData) => {
    return todoRepository.updateById(id, todoData);
};

exports.deleteTodo = (id) => {
    return todoRepository.deleteById(id);
};
