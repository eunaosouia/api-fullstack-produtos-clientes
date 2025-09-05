const express = require('express');
const routes = require('./routes');
const setupSwagger = require('./swagger');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Configuração do Swagger

app.use(express.json());
app.use(routes);

// Swagger docs
setupSwagger(app);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📚 Documentação Swagger: http://localhost:${PORT}/api-docs`);
});
