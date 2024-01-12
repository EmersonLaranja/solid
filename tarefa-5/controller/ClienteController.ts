import Cliente from "../entities/Cliente";
import InMemoryRepository from "../repositories/InMemoryRepository";
import IClienteRepository from "../repositories/interfaces/IClienteRepository";

export default class ClienteController {
    constructor(private repository: IClienteRepository) {
    }

    adicionaCliente(cliente: Cliente) {
        this.repository.adicionarCliente(cliente);
    }
    listaClientes() {
        return this.repository.listarClientes();
    }
}