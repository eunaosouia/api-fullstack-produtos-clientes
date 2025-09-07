const produtosService = require('../services/produtosService');

module.exports = {
  async criar(req, res) {
    try {
    const produto = await produtosService.criarProdutos(req.body);
      res.status(201).json(produto);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  },

  async listar(req, res) {
    try {
    const produtos = await produtosService.listarProdutos(req.query.busca);
      res.json(produtos);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  },

  async buscarPorId(req, res) {
    try {
    const produto = await produtosService.buscarProdutosPorId(req.params.id);
      res.json(produto);
    } catch (err) {
      res.status(404).json({ erro: err.message });
    }
  }
};
