const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'Cliente',
  tableName: 'clientes',
  columns: {
    id: { type: Number, primary: true, generated: true },
    nome: { type: String },
    email: { type: String },
    telefone: { type: String },
  },
});