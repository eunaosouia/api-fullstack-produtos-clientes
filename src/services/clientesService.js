const clientesRepository = require('../repositories/clientesRepository');

class ClientesService {
  async criarCliente(data) {
    if (!data.nome || !data.email || !data.telefone) {
      throw new Error('Nome, email e telefone são obrigatórios.');
    }
    // Verifica se já existe cliente com o mesmo email
    const repo = require('../data-source').getRepository('Cliente');
    const existenteEmail = await repo.findOneBy({ email: data.email });
    if (existenteEmail) {
      throw new Error('Email já cadastrado.');
    }
    // Verifica se já existe cliente com o mesmo telefone
    const existenteTelefone = await repo.findOneBy({ telefone: data.telefone });
    if (existenteTelefone) {
      throw new Error('Telefone já cadastrado.');
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
