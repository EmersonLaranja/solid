import Cliente from "../../entities/Cliente";

interface IClienteRepository {
    adicionarCliente(cliente: Cliente): void;
    listarClientes(): Cliente[] | Promise<Cliente[]>;
}

export default IClienteRepository;