import Cliente from "../entities/Cliente";
import IClienteRepository from "./interfaces/IClienteRepository";

export default class InMemoryRepository implements IClienteRepository {
    private db: Cliente[];

    constructor() {
        this.db = [];
    }

    adicionarCliente(cliente: Cliente) {
        this.db.push(cliente);
    }
    listarClientes() {
        return this.db;
    }
}
