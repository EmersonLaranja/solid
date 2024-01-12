interface ContratoRemuneravel {
    titulo: string;
    remuneracao(): number;
}

class ContratoClt implements ContratoRemuneravel {
    private GANHO_POR_HORA_CLT = 24;
    private CARGA_HORARIA_DIARIA_CLT = 8;
    titulo: string = 'CLT';

    remuneracao(): number {
        return this.GANHO_POR_HORA_CLT * this.CARGA_HORARIA_DIARIA_CLT;
    }
}
class ContratoPj implements ContratoRemuneravel {
    private GANHO_POR_HORA_PJ = 36;
    private CARGA_HORARIA_DIARIA_PJ = 8;
    titulo: string = 'PJ';

    remuneracao(): number {
        return this.GANHO_POR_HORA_PJ * this.CARGA_HORARIA_DIARIA_PJ;
    }
}

class Estagio implements ContratoRemuneravel {
    private GANHO_POR_HORA_ESTAGIARIO = 14;
    private CARGA_HORARIA_DIARIA_ESTAGIARIO = 4;
    titulo: string = 'Estágio';

    remuneracao(): number {
        return this.GANHO_POR_HORA_ESTAGIARIO * this.CARGA_HORARIA_DIARIA_ESTAGIARIO;
    }
}

class FolhaDePagamento {
    static readonly MES_COMERCIAL = 20; //dias trabalhados no mês

    static calcularSalarioLiquidoMensal(funcionario: ContratoRemuneravel): number {
        return funcionario.remuneracao() * this.MES_COMERCIAL
    }
}

const funcionarioClt = new ContratoClt();
const funcionarioPj = new ContratoPj();
const funcionarioEstagiario = new Estagio();

console.log(`Sou ${funcionarioClt.titulo} e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioLiquidoMensal(funcionarioClt)}`)
console.log(`Sou ${funcionarioPj.titulo} e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioLiquidoMensal(funcionarioPj)}`)
console.log(`Sou ${funcionarioEstagiario.titulo} e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioLiquidoMensal(funcionarioEstagiario)}`)