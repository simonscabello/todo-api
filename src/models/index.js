const sequelize = require('../config/database');

const User = require('./user');
const List = require('./list');
const Todo = require('./todo');

User.hasMany(Todo, { foreignKey: 'userId', as: 'todos' });
User.hasMany(List, { foreignKey: 'userId', as: 'lists' });

Todo.belongsTo(User, { foreignKey: 'userId', as: 'user' });
Todo.belongsTo(List, { foreignKey: 'listId', as: 'list' });

List.hasMany(Todo, { foreignKey: 'listId', as: 'todos' });
List.belongsTo(User, { foreignKey: 'userId', as: 'user' });

module.exports = {
  sequelize,
  User,
  List,
  Todo,
};
