/**
 * @swagger
 * /produtos:
 *   post:
 *     summary: Cadastra um novo produto
 *     tags: [Produtos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - preco
 *             properties:
 *               nome:
 *                 type: string
 *               preco:
 *                 type: number
 *               estoque:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *       400:
 *         description: Dados inválidos
 */

/**
 * @swagger
 * /produtos:
 *   get:
 *     summary: Lista todos os produtos
 *     tags: [Produtos]
 *     parameters:
 *       - name: busca
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtro de nome
 *     responses:
 *       200:
 *         description: Lista de produtos
 */

/**
 * @swagger
 * /produtos/{id}:
 *   get:
 *     summary: Busca um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do produto
 *     responses:
 *       200:
 *         description: Produto encontrado
 *       404:
 *         description: Produto não encontrado
 */
const produtosService = require('../services/produtosService');

module.exports = {
  async criar(req, res) {
    try {
    const produto = await produtosService.criarProduto(req.body);
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
    const produto = await produtosService.buscarProdutoPorId(req.params.id);
      res.json(produto);
    } catch (err) {
      res.status(404).json({ erro: err.message });
    }
  }
};
