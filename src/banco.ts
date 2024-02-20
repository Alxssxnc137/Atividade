//cadastro de contas bancarias 
class Conta {
    tipo: string;
    saldo: number;
    titularidade: string;
    historico: string;

    constructor(tipo: string, saldo: number, titularidade: string, historico: string) {
        this.historico = historico
        this.saldo = saldo
        this.tipo = tipo
        this.titularidade = titularidade

    }
}
const conta = new Conta("Conta Corrente", 20000, "Alisson Oliveira", "Pix recebido de Ilana Oliveira: 20.000")
console.log(conta)

//Controle de Despesas e Receitas

class DespesasReceitas {
    rendimentoObtido: number;
    descontoRecebido: number;
    transacoes: string;
    gastosMensais: number;

    constructor(rendimentoObtido: number, descontoRecebido: number, transacoes: string, gastosMensais: number) {

        this.descontoRecebido = descontoRecebido
        this.gastosMensais = gastosMensais
        this.transacoes = transacoes
        this.rendimentoObtido = rendimentoObtido
    }
}

const controle = new DespesasReceitas(1500, 200, "Pix recebido no valor: 200", 1000)
console.log(controle)

//Planejamento Financeiro:
class Planejamento {

    descricao: string;
    dataInicio: Date;
    dataFim: Date;
    responsavel: string;
    prioridade: number;

    constructor(descricao: string, dataInicio: Date, dataFim: Date, responsavel: string, prioridade: number) {
        this.descricao = descricao
        this.dataFim = dataFim
        this.dataInicio = dataInicio
        this.responsavel = responsavel
        this.prioridade = prioridade
    }
}

const planejamento = new Planejamento("Desenvolver novo recurso", new Date("2024-2-20"), new Date("2024-4-20"), "Equipe de desenvolvimento", 1)
console.log(planejamento)