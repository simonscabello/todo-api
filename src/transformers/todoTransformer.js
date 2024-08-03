const Transformer = require('./Transformer');

class TodoTransformer extends Transformer {
  transform(todo) {
    return {
      id: todo.id,
      title: todo.title,
      description: todo.description,
      completed: todo.completed,
      // userId: todo.userId,
      createdAt: todo.createdAt,
      updatedAt: todo.updatedAt,
    };
  }
}

module.exports = TodoTransformer;
