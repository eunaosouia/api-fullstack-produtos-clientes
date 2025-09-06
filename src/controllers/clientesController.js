const clientesService = require('../services/clientesService');

module.exports = {
  async criar(req, res) {
    try {
      const cliente = await clientesService.criarCliente(req.body);
      res.status(201).json(cliente);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  },

  async listar(req, res) {
    try {
      const clientes = await clientesService.listarClientes();
      res.json(clientes);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  },

  async buscarPorId(req, res) {
    try {
      const cliente = await clientesService.buscarClientePorId(req.params.id);
      res.json(cliente);
    } catch (err) {
      res.status(404).json({ erro: err.message });
    }
  }
};
