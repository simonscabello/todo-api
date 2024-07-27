require('dotenv').config();

const { Sequelize } = require('sequelize');

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;
const db_dialect = process.env.DB_DRIVER;

const sequelize = new Sequelize(db_name, db_user, db_password, {
  host: db_host,
  dialect: db_dialect,
});

module.exports = sequelize;
