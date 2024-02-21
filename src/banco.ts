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
    mostraConta() {
        console.log('---------------CONTA------------------')
        console.log(`TIPO: ${this.tipo}`)
        console.log(`SALDO: ${this.saldo}`)
        console.log(`TITULARIDADE: ${this.titularidade}`)
        console.log(`HISTORICO DE TRANSAÇÕES: ${this.historico}`)
        console.log('--------------------------------------')
    }
}
const conta = new Conta("Conta Corrente", 20000, "Alisson Oliveira", "Pix recebido de Ilana Oliveira: 20.000")
console.log(conta.mostraConta())

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
    receitaeDesepesa() {
        console.log('-----------------DESPESAS E RECEITAS---------------')
        console.log(`RENDIMENTO OBTIDO: ${this.rendimentoObtido}`)
        console.log(`DESCONTO RECEBIDO: ${this.descontoRecebido}`)
        console.log(`TRANSAÇÕES: ${this.transacoes}`)
        console.log(`GASTOS MENSAIS: ${this.gastosMensais}`)
        console.log('---------------------------------------------------')
    }
}

const controle = new DespesasReceitas(1500, 200, "Pix recebido no valor: 200", 1000)
console.log(controle.receitaeDesepesa())

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
    planejamento() {
        console.log('---------------PLANEJAMENTO--------------------')
        console.log(`DESCRIÇÃO: ${this.descricao}`)
        console.log(`INICIO DE PLANEJAMENTO FINANCEIRO: ${this.dataInicio.toLocaleDateString('pt-BR')}`)
        console.log(`FIM DE PLANEJAMENTO: ${this.dataFim.toLocaleDateString('pt-BR')}`)
        console.log(`RESPONSAVEL: ${this.responsavel}`)
        console.log(`PRIORIDADE DE NIVEL: ${this.prioridade}`)
        console.log('------------------------------------------------')
    }
}

const planejamento = new Planejamento("Desenvolver novo recurso", new Date("2024-2-20"), new Date("2024-4-20"), "Equipe de desenvolvimento", 1)
console.log(planejamento.planejamento())