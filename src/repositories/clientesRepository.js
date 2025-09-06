const AppDataSource = require('../data-source');

class ClientesRepository {
  async criar(data) {
    const repo = AppDataSource.getRepository('Cliente');
    const cliente = repo.create(data);
    return await repo.save(cliente);
  }

  async listar() {
    const repo = AppDataSource.getRepository('Cliente');
    return await repo.find();
  }

  async buscarPorId(id) {
    const repo = AppDataSource.getRepository('Cliente');
    return await repo.findOneBy({ id });
  }
}

module.exports = new ClientesRepository();
