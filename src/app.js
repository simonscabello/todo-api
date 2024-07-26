const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');
const healthRoutes = require('./routes/healthRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api/todo', todoRoutes);
app.use('/api/health', healthRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;
