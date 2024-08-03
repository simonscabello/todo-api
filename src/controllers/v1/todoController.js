const todoService = require('../../services/todoService');
const TodoTransformer = require('../../transformers/todoTransformer');

const todoTransformer = new TodoTransformer();

exports.getAllTodos = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const { todos, total } = await todoService.getAllTodos(req.user.id, {
      page: parseInt(page),
      limit: parseInt(limit),
    });
    const transformedTodos = todoTransformer.transformCollection(todos);

    res.status(200).json({
      total,
      data: transformedTodos,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const newTodo = await todoService.createTodo(req.user.id, req.body);
    const transformedTodo = todoTransformer.transform(newTodo);

    res.status(201).json({
      data: transformedTodo,
    });
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
      const transformedTodo = todoTransformer.transform(todo);

      res.status(200).json({
        data: transformedTodo,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const updatedTodo = await todoService.updateTodo(req.user.id, req.params.id, req.body);
    if (!updatedTodo) {
      res.status(404).json({ message: 'Todo not found' });
    } else {
      const transformedTodo = todoTransformer.transform(updatedTodo);

      res.status(200).json({
        data: transformedTodo,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await todoService.deleteTodo(req.user.id, req.params.id);
    if (!deletedTodo) {
      res.status(404).json({ message: 'Todo not found' });
    } else {
      res.status(200).json({ message: 'Todo deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};