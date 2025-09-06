require('reflect-metadata');
const AppDataSource = require('./data-source');
const express = require('express');
const routes = require('./routes');
const setupSwagger = require('./swagger');


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
setupSwagger(app);
app.use(routes);

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
      console.log(`Servidor rodando em http://localhost:${PORT}`);
      console.log(`Documentação Swagger: http://localhost:${PORT}/api-docs`);
    });
  })
  .catch((err) => {
    console.error('Erro ao inicializar o TypeORM:', err);
  });
