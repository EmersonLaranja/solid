import Cliente from "../entities/Cliente";
import IClienteRepository from "./interfaces/IClienteRepository";

export default class PostgresRepository implements IClienteRepository {
    private db: Record<number, Cliente>;

    constructor() {
        this.db = {}
    }
    adicionarCliente(cliente: Cliente): void {
        return this.add(cliente)
    }
    listarClientes(): Cliente[] | Promise<Cliente[]> {
        return this.list()
    }

    private add(cliente: Cliente) {
        this.db[cliente.id] = cliente
    }

    private list() {
        const clientes: Cliente[] = [];

        for (const chave in this.db) {
            if (Object.prototype.hasOwnProperty.call(this.db, chave)) {
                clientes.push(this.db[chave]);
            }
        }

        return clientes;
    }
}
