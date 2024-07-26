const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');
const healthRoutes = require('./routes/healthRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api/todo', todoRoutes);
app.use('/api/health', healthRoutes);

module.exports = app;
