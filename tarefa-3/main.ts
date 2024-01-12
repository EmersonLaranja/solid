
abstract class Funcionario {
    nome: string;
    cargaHoraria: number;
    salario: number;

    constructor(nome: string, cargaHoraria: number, salario: number) {
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
        this.salario = salario;
    }

    abstract trabalha(): void;
    abstract calculaSalarioLiquido(): number;
    abstract calculaParticipacaoDeLucros(lucro: number): number;
}

class FuncionarioEfetivo extends Funcionario {
    constructor(nome: string, cargaHoraria: number, salario: number) {
        super(nome, cargaHoraria, salario);
    }

    trabalha(): void {
        console.log(`Me chamo ${this.nome} e eu trabalho ${this.cargaHoraria} horas por semana`);
    }

    calculaSalarioLiquido(): number {
        const TAXA_DESCONTO = 0.2;
        const desconto = this.salario * TAXA_DESCONTO;
        return this.salario - desconto;
    }
    calculaParticipacaoDeLucros(lucro: number): number {
        return lucro * this.salario;
    }
}

class FuncionarioVoluntario extends Funcionario {
    orientador: Funcionario;

    constructor(nome: string, cargaHorariaExtensao: number, funciarioEfetivo: Funcionario) {
        super(nome, cargaHorariaExtensao, null as unknown as number);
        this.orientador = funciarioEfetivo;
    }

    escreveRelatorio(): void {
        console.log(`Me chamo ${this.nome} e eu escrevo relatórios para o meu orientador ${this.orientador.nome}`);
    }

    trabalha(): void {
        console.log(`Me chamo ${this.nome} e eu pesquiso ${this.cargaHoraria} horas por semana para cumprir na minha graduação`);
    }

    calculaParticipacaoDeLucros(lucro: number): number {
        throw new Error("Funcionário voluntário não tem participação de lucros");
    }

    calculaSalarioLiquido(): number {
        throw new Error("Funcionário voluntário não tem salário");
    }
}

const funcionarioEfetivo: Funcionario = new FuncionarioEfetivo("João", 40, 2400);
const funcionarioVoluntario: Funcionario = new FuncionarioVoluntario("Enzo", 20, funcionarioEfetivo);

//Efetivo
console.log("nome:", funcionarioEfetivo.nome);
console.log("salário bruto:", funcionarioEfetivo.salario);
console.log("salário líquido:", funcionarioEfetivo.calculaSalarioLiquido());
console.log("salário com PL:", funcionarioEfetivo.calculaParticipacaoDeLucros(2.5), "\n");

//Voluntário
console.log("nome:", funcionarioVoluntario.nome);
console.log("salário bruto:", funcionarioVoluntario.salario);
console.log("salário líquido:", funcionarioVoluntario.calculaSalarioLiquido());
console.log("salário com PL:", funcionarioVoluntario.calculaParticipacaoDeLucros(2.5)); 