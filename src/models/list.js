const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Todo = require('./todo');

const List = sequelize.define('List', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = List;
