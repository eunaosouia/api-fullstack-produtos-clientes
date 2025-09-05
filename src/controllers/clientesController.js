const db = require('../database/connection');

module.exports = {
  criar(req, res) {
    const { nome, email, telefone } = req.body;

    if (!nome || !email || !telefone) {
        return res.status(400).json({erro: 'Nome email e telefone são obrigatórios.'});
    }

    const query = `INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)`;
    db.run(query, [nome, email, telefone], function(err) {
      if (err) {
        if (err.message.includes('UNIQUE constraint failed')) {
          return res.status(400).json({erro: 'Email já cadastrado.'});
        }
        return res.status(500).json({erro: err.message});
      }

      res.status(201).json({id: this.lastID, nome, email, telefone});
    });
  },

  listar(req, res) {
   db.all('SELECT * FROM clientes', (err, rows) => {
      if (err) return res.status(500).json({erro: err.message});
      res.json(rows);
    });
  },

  buscarPorId(req, res) {
    const { id } = req.params;

    db.get('SELECT * FROM clientes WHERE id = ?', [id], (err, row) => {
      if (err) return res.status(500).json({ erro: err.message });
      if (!row) return res.status(404).json({ erro: 'Cliente não encontrado' });

      res.json(row);
    });
  }
};
