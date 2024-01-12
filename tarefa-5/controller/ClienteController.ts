import Cliente from "../entities/Cliente";
import InMemoryRepository from "../repositories/InMemoryRepository";

export default class ClienteController {
    repository: InMemoryRepository;
    constructor() {
        this.repository = new InMemoryRepository();
    }

    adicionaCliente(cliente: Cliente) {
        this.repository.adicionaCliente(cliente);
    }
    listaClientes() {
        return this.repository.listaClientes();
    }
}