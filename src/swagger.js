const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API FullStack - Produtos e Clientes',
      version: '1.0.0',
      description: 'Documentação da API de Produtos e Clientes',
    },
  },
  apis: ['./src/routes/*.js'], // arquivos com as anotações
};

const swaggerSpec = swaggerJsdoc(options);

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;
