const Transformer = require('./Transformer');
const TodoTransformer = require('./todoTransformer');

class ListTransformer extends Transformer {
  constructor() {
    super();
    this.todoTransformer = new TodoTransformer();
  }

  transform(list) {
    return {
      id: list.id,
      name: list.name,
      userId: list.userId,
      todos: this.todoTransformer.transformCollection(list.todos || []),
      createdAt: list.createdAt,
      updatedAt: list.updatedAt,
    };
  }

  transformCollection(lists) {
    return lists.map((list) => this.transform(list));
  }
}

module.exports = ListTransformer;
