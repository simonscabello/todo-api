const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo API',
      version: '1.0.0',
      description: 'API documentation for the Todo application',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Version 1',
      },
    ],
  },
  apis: ['./src/routes/v1/*.js'], // Caminho para os arquivos de rota da versão 1
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
