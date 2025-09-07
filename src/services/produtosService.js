const produtosRepository = require('../repositories/produtosRepository');

class produtosService {
  async criarProdutos(data) {
    if (!data.nome || data.preco == null) {
      throw new Error('Nome e preço são obrigatórios.');
    }
    return await produtosRepository.criar(data);
  }

  async listarProdutos(busca) {
    return await produtosRepository.listar(busca);
  }

  async buscarProdutosPorId(id) {
    const produtos = await produtosRepository.buscarPorId(id);
    if (!produtos) throw new Error('produtos não encontrado');
    return produtos;
  }
}

module.exports = new produtosService();
