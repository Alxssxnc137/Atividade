// criando classe pessoa para herança
class Pessoa {
    nome: string;
    dataNascimento: Date;
    telefone: string;
    email: string;
    endereco: string;
    cpf: string;
    sexo?: string;

    constructor(nome: string, dataNascimento: Date, telefone: string, email: string, endereco: string, cpf: string, sexo?: string,) {
        this.cpf = cpf
        this.dataNascimento = dataNascimento
        this.email = email
        this.endereco = endereco
        this.telefone = telefone
        this.nome = nome
        this.sexo = sexo
    }

    mostrarPessoa() {
        
        console.log(`NOME______________: ${this.nome}`)
        console.log(`DATA DE NASCIMENTO: ${this.dataNascimento.toLocaleDateString('pt-BR')}`)
        console.log(`TELEFONE__________: ${this.telefone}`)
        console.log(`EMAIL_____________: ${this.email}`)
        console.log(`ENDEREÇO__________: ${this.endereco}`)
        console.log(`CPF_______________: ${this.cpf}`)

        if (this.sexo) {
            console.log(`GÊNERO____________: ${this.sexo}`)
        }
        
    }
}

// criando classe funcionario

class Funcionario extends Pessoa{
    cargo: string;
    habilidades: string;

    // metodo construtor da classe funcionario 
    constructor( nome: string,  endereco: string, cargo: string, habilidades: string, dataNascimento: Date, email: string,cpf: string, sexo: string) {
     super(nome, dataNascimento, email, email, endereco, cpf, sexo)

     this.cargo = cargo
     this.habilidades = habilidades
    }
    mostrarDados() {
        console.log('---------DADOS DO FUNCIONARIO-------------')
        super.mostrarPessoa()
        console.log(`PRIFISSÃO_________: ${this.habilidades}`)
        console.log(`CARGO_____________: ${this.cargo}`)
        console.log('-------------------------------------------')

        }
    }

const funcionario1 = new Funcionario("CARLOS ALMEIDA ALVES", "RUA RIO MAXARANGUAPE", "MÉDICO", "CIRURGIÃO", new Date("2001-8-29"), "carlos.silb@gmail.com", "707.117.013-23", "MASCULINO")
funcionario1.mostrarDados()


//Cadastro de paciente

class Paciente extends Pessoa{
    idPaciente: string;

    constructor(idPaciente: string, nome: string, dataNascimento: Date, telefone: string, endereco: string, email: string, cpf: string,  sexo: string) {
        super(nome, dataNascimento, telefone, email, endereco, cpf, sexo)
        this.idPaciente = idPaciente
    }
    mostrarPaciente(){
        console.log('----------------MOSTRAR DADOS DO PACIENTE--------------------')
        super.mostrarPessoa()
        console.log(`ID DO PACIENTE____: ${this.idPaciente}`)
        console.log(`MÉDICO____________: ${funcionario1.nome}`)
        console.log('-------------------------------------------------------------')

        }
    }

const paciente1 = new Paciente("1023", "ANTONIO RAMALHO SILVA", new Date("1990-1-20"), "84 991140714", "RUA AMAPA", "antonio.melo@gmail.com", "808.220.013-23", "masculino")
paciente1.mostrarPaciente()


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
        console.log(`Data da consulta: ${this.data.toLocaleDateString('pt-BR')}`)
        console.log(`Paciente: ${this.paciente}`)
        console.log(`Medico: ${this.medico}`)
        console.log(`Especialidade: ${this.especialidade}`)
        console.log('------------------------------------')

    }
}
const primeiraConsulta = new Consulta('1017118', new Date(2014, 2, 27, 8, 20), 'Leonardo', 'Dr.Lucas', 'Cirurgião')
//console.log(primeiraConsulta.mostrarConsulta())

