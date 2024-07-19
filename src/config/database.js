const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo', 'root', 'root', {
    host: '172.17.0.2',
    dialect: 'mysql'
});

module.exports = sequelize;