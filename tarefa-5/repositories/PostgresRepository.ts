import Cliente from "../entities/Cliente";

export default class PostgresRepository {
    private db: Record<number, Cliente>;

    constructor() {
        this.db = {}
    }

    add(cliente: Cliente) {
        this.db[cliente.id] = cliente
    }

    list() {
        const clientes: Cliente[] = [];

        for (const chave in this.db) {
            if (Object.prototype.hasOwnProperty.call(this.db, chave)) {
                clientes.push(this.db[chave]);
            }
        }

        return clientes;
    }
}
