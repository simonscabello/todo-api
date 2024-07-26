const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Todo = sequelize.define('Todo', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: true
});

Todo.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

User.hasMany(Todo, {
    foreignKey: 'userId',
    as: 'todos'
});

module.exports = Todo;