const AppDataSource = require('../data-source');

class ProdutosRepository {
  async criar(data) {
    const repo = AppDataSource.getRepository('Produto');
    const produto = repo.create(data);
    return await repo.save(produto);
  }

  async listar(busca) {
    const repo = AppDataSource.getRepository('Produto');
    if (busca) {
      return await repo.find({ where: { nome: AppDataSource.driver.options.type === 'sqlite' ? `%${busca}%` : busca } });
    }
    return await repo.find();
  }

  async buscarPorId(id) {
    const repo = AppDataSource.getRepository('Produto');
    return await repo.findOneBy({ id });
  }
}

module.exports = new ProdutosRepository();
