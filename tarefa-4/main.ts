interface Pagamento {
    valor: number;
    pagarDinheiro(): void;
    pagarTransferencia(): void;
    pagarCheque(): void;
}



class PagamentoCheque implements Pagamento {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }
    pagarCheque(): void {
        console.log(`O pagamento de ${this.valor} será feito por cheque.`);
    }

    pagarDinheiro(): void {
        throw new Error("Pagamento em cheque não pode ser pago por dinheiro.");
    }

    pagarTransferencia(): void {
        throw new Error("Pagamento em cheque não pode ser pago por transferência.");
    }
}


class PagamentoDinheiro implements Pagamento {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    pagarDinheiro(): void {
        console.log(`O pagamento de ${this.valor} será feito por dinheiro.`);
    }

    pagarTransferencia(): void {
        throw new Error("Pagamento em dinheiro não pode ser pago por transferência.");
    }
    pagarCheque(): void {
        throw new Error("Pagamento em dinheiro não pode ser pago por cheque.");
    }
}

class PagamentoPorTransferencia implements Pagamento {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    pagarTransferencia(): void {
        console.log(`O pagamento de ${this.valor} será feito por transferência.`);
    }
    pagarDinheiro(): void {
        throw new Error("Pagamento por transferência não pode ser recebido em dinheiro.");
    }

    pagarCheque(): void {
        throw new Error("Pagamento por transferência não pode ser pago em cheque.");
    }
}

const pagamentoCheque = new PagamentoCheque(100);
pagamentoCheque.pagarCheque();

const pagamentoDinheiro = new PagamentoDinheiro(200);
pagamentoDinheiro.pagarDinheiro();

const pagamentoTransferencia = new PagamentoPorTransferencia(300);
pagamentoTransferencia.pagarTransferencia();

pagamentoDinheiro.pagarTransferencia(); //🤔🤔🤔