const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'Produto',
  tableName: 'produtos',
  columns: {
    id: { type: Number, primary: true, generated: true },
    nome: { type: String },
    preco: { type: Number },
    estoque: { type: Number, default: 0 },
  },
});