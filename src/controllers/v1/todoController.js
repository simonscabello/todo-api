const todoService = require('../../services/todoService');

exports.getAllTodos = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const todos = await todoService.getAllTodos(req.user.id, { page: parseInt(page), limit: parseInt(limit) });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const newTodo = await todoService.createTodo(req.user.id, req.body);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const todo = await todoService.getTodoById(req.user.id, req.params.id);
    if (!todo) {
      res.status(404).json({ message: 'Todo not found' });
    } else {
      res.status(200).json(todo);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const updatedTodo = await todoService.updateTodo(
      req.user.id,
      req.params.id,
      req.body
    );
    if (!updatedTodo) {
      res.status(404).json({ message: 'Todo not found' });
    } else {
      res.status(200).json(updatedTodo);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await todoService.deleteTodo(
      req.user.id,
      req.params.id
    );
    if (!deletedTodo) {
      res.status(404).json({ message: 'Todo not found' });
    } else {
      res.status(200).json({ message: 'Todo deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
