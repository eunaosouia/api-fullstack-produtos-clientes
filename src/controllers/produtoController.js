const db = require('../database/connection');

module.exports = {
  criar(req, res) {
    const { nome, preco, estoque } = req.body;

    if (!nome || preco == null) {
      return res.status(400).json({ erro: 'Nome e preço são obrigatórios.' });
    }

    const query = `INSERT INTO produtos (nome, preco, estoque) VALUES (?, ?, ?)`;
    db.run(query, [nome, preco, estoque || 0], function (err) {
      if (err) return res.status(500).json({ erro: err.message });

      res.status(201).json({ id: this.lastID, nome, preco, estoque });
    });
  },

  listar(req, res) {
    const { busca } = req.query;
    let query = 'SELECT * FROM produtos';
    const params = [];

    if (busca) {
      query += ' WHERE nome LIKE ?';
      params.push(`%${busca}%`);
    }

    db.all(query, params, (err, rows) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.json(rows);
    });
  },

  buscarPorId(req, res) {
    const { id } = req.params;

    db.get('SELECT * FROM produtos WHERE id = ?', [id], (err, row) => {
      if (err) return res.status(500).json({ erro: err.message });
      if (!row) return res.status(404).json({ erro: 'Produto não encontrado' });

      res.json(row);
    });
  }
};
