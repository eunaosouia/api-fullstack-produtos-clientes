const clientesRepository = require('../repositories/clientesRepository');

class ClientesService {
  async criarCliente(data) {
    if (!data.nome || !data.email || !data.telefone) {
      throw new Error('Nome, email e telefone são obrigatórios.');
    }
    return await clientesRepository.criar(data);
  }

  async listarClientes() {
    return await clientesRepository.listar();
  }

  async buscarClientePorId(id) {
    const cliente = await clientesRepository.buscarPorId(id);
    if (!cliente) throw new Error('Cliente não encontrado');
    return cliente;
  }
}

module.exports = new ClientesService();
