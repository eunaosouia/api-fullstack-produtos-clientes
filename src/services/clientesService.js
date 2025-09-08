const clientesRepository = require('../repositories/clientesRepository');

class ClientesService {
  async criarCliente(data) {
    if (!data.nome || !data.email || !data.telefone) {
      throw new Error('Nome, email e telefone são obrigatórios.');
    }
   
    const emailRegex = /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('Email inválido.');
    }
    const telefoneRegex = /^(\(?\d{2}\)?\s?)?9\d{4}-?\d{4}$/;
    if (!telefoneRegex.test(data.telefone)) {
      throw new Error('Telefone inválido.');
    }
    const repo = require('../database/data-source').getRepository('Cliente');
    const existenteNome = await repo.findOneBy({ nome: data.nome });
    if (existenteNome) {
      throw new Error('Nome já cadastrado.');
    }
    const existenteEmail = await repo.findOneBy({ email: data.email });
    if (existenteEmail) {
      throw new Error('Email já cadastrado.');
    }
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
