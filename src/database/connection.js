const sqlite3 = require('sqlite3').verbose();
const path = require('path');


const dbPath = process.env.DB_PATH || '/data/db.sqlite';

console.log("Usando banco de dados:", dbPath);

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco:", err.message);
  } else {
    console.log("Conectado ao banco SQLite com sucesso!");
  }
});

module.exports = db;
