//Cadastro de Projetos
class Projeto {
    status: string;
    descricao: string;
    equipe: string;
    nomeProjeto: string;
    inicioProjeto: Date;
    fimProjeto: Date;
    responsavel: string;
    constructor(nomeProjeto: string, status: string, descricao: string, equipe: string, inicioProjeto: Date, fimProjeto: Date, responsavel: string) {
        this.descricao = descricao
        this.equipe = equipe
        this.nomeProjeto = nomeProjeto
        this.status = status
        this.inicioProjeto = inicioProjeto
        this.fimProjeto = fimProjeto
        this.responsavel = responsavel
    }
    projeto(){
console.log('------------------PROJETO NOVO-----------------')
console.log(`NOME DO PROJETO: ${this.nomeProjeto}`)
console.log(`STATUS: ${this.status}`)
console.log(`DESCRIÇÃO: ${this.descricao}`)
console.log(``)



    }

}
const projeto = new Projeto("Organização", "Sendo desenvolvido", "O projeto foca em organização", "Gerente de projetos, Equipe de desenvolvimento", new Date('2024-02-23'), new Date('2024-04-25'), "Gerente de Projetos")
console.log(projeto)

//Controle de Tarefas

class Controle {
    tarefasIndividuais: string;
    projeto: Projeto;
    prazoConclusao: Date;

    constructor(tarefasIndividuais: string, projeto: Projeto, prazoConclusao: Date) {
        this.prazoConclusao = prazoConclusao
        this.projeto = projeto
        this.tarefasIndividuais = tarefasIndividuais
    }
}

const tarefa = new Controle("Organizar relatorio para a empresa", projeto, new Date('2024-04-25'))
console.log(tarefa)

//Comunicação Interna

class CaomunicacaoInterna {
    membrosEquipe: string;
    mensagens: string;
    arquivoCompartilhado: string;
    registroDeDiscussao: string;
    decisoesImportantes: string;

    constructor(membrosEquipe: string, mensagens: string, arquivoCompartilhado: string, registroDeDiscussao: string, decisoesImportantes: string) {
        this.arquivoCompartilhado = arquivoCompartilhado
        this.decisoesImportantes = decisoesImportantes
        this.mensagens = mensagens
        this.registroDeDiscussao = registroDeDiscussao
        this.membrosEquipe = membrosEquipe
    }
}

const comunicacao = new CaomunicacaoInterna("Gerente de projetos, Equipe de desenbvolvimento", "Atualizacoes sobre os projetos",
 "Compartilhamento sobre projetos atuais", "Relatorio sobre questoes resolvidas", "Comunicados sobre o projeto" )
 console.log(comunicacao)