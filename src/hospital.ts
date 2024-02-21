//cadastro funcionario

class Funcionario {
    nome: string;
    idade: number;
    cargo: string;
    habilidades: string;
    data_nascimento: Date;

    // metodo construtor da classe funcionario 
    constructor(nome: string, idade: number, cargo: string, habilidades: string, data_nascimento: Date) {
        this.nome = nome,
            this.idade = idade,
            this.cargo = cargo
        this.habilidades = habilidades
        this.data_nascimento = data_nascimento

    }
    mostrarDados() {
        console.log('---------DADOS DO FUNCIONARIO-------------')
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`Cargo: ${this.cargo}`)
        console.log(`Habilidade: ${this.habilidades} `)
        console.log(`Data de nascimento: ${this.data_nascimento.toLocaleDateString('pt-BR')}`)
        console.log('-------------------------------------------')
    }

}
const funcionario1 = new Funcionario('Carlos', 35, 'Recepcionista', 'Boa comunicação', new Date("1990-8-29"))
console.log(funcionario1.mostrarDados())



//Marcar consulta
class Consulta {
    idConsulta: string;
    data: Date;
    paciente: string;
    medico: string;
    especialidade: string;

    constructor(idConsulta: string, data: Date, paciente: string, medico: string, especialidade: string) {

        this.idConsulta = idConsulta
        this.data = data
        this.paciente = paciente
        this.medico = medico
        this.especialidade = especialidade
    }
    mostrarConsulta() {
        console.log('----------DADOS DA CONSULTA----------')
        console.log(`IdConsulta: ${this.idConsulta}`)
        console.log(`Data da consulta: ${this.data}`)
        console.log(`Paciente: ${this.paciente}`)
        console.log(`Medico: ${this.medico}`)
        console.log(`Especialidade: ${this.especialidade}`)
        console.log('------------------------------------')

    }
}
const primeiraConsulta = new Consulta('1017118', new Date(2014, 2, 27, 8, 20), 'Leonardo', 'Dr.Lucas', 'Cirurgião')
console.log(primeiraConsulta.mostrarConsulta())

//Cadastro de paciente

class Paciente {
    idPaciente: string;
    nome: string;
    idade: number;
    sexo: string;
    telefone: string;
    endereco: string;

    constructor(idPaciente: string, nome: string, idade: number, sexo: string, telefone: string, endereco: string) {
        this.endereco = endereco
        this.idade = idade
        this.sexo = sexo
        this.telefone = telefone
        this.nome = nome
        this.idPaciente = idPaciente
    }
    mostrarPaciente() {
        console.log('-----------DADOS DO FUNCIONARIO----------')
        console.log(`Paciente: ${this.idPaciente}`)
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`Sexo: ${this.sexo}`)
        console.log(`Telefone: ${this.telefone}`)
        console.log(`Endereço: ${this.endereco}`)
        console.log('-----------------------------------------')
    }
}

const paciente1 = new Paciente('2929', 'Antonio', 35, 'masculino', '83991140714', 'Rua Rio Novo, 200')
console.log(paciente1.mostrarPaciente())
