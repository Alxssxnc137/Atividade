//cadastro funcionario

class Funcionario {
    nome: string;
    idade: number;
    cargo: string;
    habilidades: string;

    constructor(nome: string, idade: number, cargo: string, habilidades: string) {
        this.nome = nome,
            this.idade = idade,
            this.cargo = cargo
        this.habilidades = habilidades
    }

}
const funcionario1 = new Funcionario('Carlos', 35, 'Recepcionista', 'Boa comunicação')
console.log(funcionario1)



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
}
const primeiraConsulta = new Consulta('1017118', new Date(2014, 2, 27, 8, 20), 'Leonardo', 'Dr.Lucas', 'Cirurgião')
console.log(primeiraConsulta)

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
}

const paciente1 = new Paciente ('2929', 'Antonio', 35, 'masculino', '83991140714', 'Rua Rio Novo, 200')
console.log(paciente1)
