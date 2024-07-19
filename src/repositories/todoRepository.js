const Todo = require('../models/todo');

exports.findAll = async () => {
    return await Todo.findAll();
};

exports.create = async (todoData) => {
    return await Todo.create(todoData);
};

exports.findById = async (id) => {
    return await Todo.findByPk(id);
};

exports.updateById = async (id, todoData) => {
    const todo = await Todo.findByPk(id);
    if (todo) {
        return await todo.update(todoData);
    }
    return null;
};

exports.deleteById = async (id) => {
    const todo = await Todo.findByPk(id);
    if (todo) {
        await todo.destroy();
        return todo;
    }
    return null;
};
