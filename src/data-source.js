const { DataSource } = require('typeorm');
const Cliente = require('./entities/Cliente');
const Produto = require('./entities/Produto');

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: process.env.DB_PATH || 'src/database/db.sqlite',
  synchronize: true,
  entities: [Cliente, Produto],
});

module.exports = AppDataSource;