const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/v1/todoRoutes');
const healthRoutes = require('./routes/healthRoutes');
const authRoutes = require('./routes/v1/authRoutes');
const helmet = require('helmet');
const setupSwagger = require('./swagger');
const apiLimiter = require('./middlewares/rateLimiter'); // Importa o middleware de rate limiting

const app = express();

app.use(bodyParser.json());
app.use(helmet());
app.use(apiLimiter);

setupSwagger(app);

app.use('/api/health', healthRoutes);
app.use('/api/v1/todos', todoRoutes);
app.use('/api/v1/auth', authRoutes);

module.exports = app;
