const db = require('./connection');
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS produtos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      preco REAL NOT NULL,
      estoque INTEGER DEFAULT 0,
      data_criacao TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);


db.run(`CREATE TABLE IF NOT EXISTS clientes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  data_criacao TEXT DEFAULT CURRENT_TIMESTAMP
)`);
});

console.log('Tabelas criadas com sucesso.');
