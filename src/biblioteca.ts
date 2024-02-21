//criei cadastro para livros
class Livro {
    titulo: string;
    autor: string;
    editora: string;
    categoria: string;
    ano_lancamento: Date;

    constructor(titulo: string, autor: string, editora: string, categoria: string, ano_lancamento: Date) {
        this.titulo = titulo
        this.autor = autor
        this.editora = editora
        this.categoria = categoria
        this.ano_lancamento = ano_lancamento

    }
    mostrarLivro() {
        console.log('------------LIVRO--------------')
        console.log(`TITULO: ${this.titulo}`)
        console.log(`AUTOR: ${this.autor}`)
        console.log(`EDITORA: ${this.editora}`)
        console.log(`CATEGORIA: ${this.categoria}`)
        console.log(`ANO DE LANÇAMENTO: ${this.ano_lancamento.getFullYear()}`)
        console.log('---------------------------------------')

    }
}
const livro = new Livro("Donnie Darko", "Richard Kelly", "Darkside Books", "Ficção Cientifíca ", new Date("2016-5-20"))
console.log(livro.mostrarLivro())

//cadastrar usuarios
class Usuario {
    nome: string;
    telefone: string;
    endereco: string;
    historico: string;

    constructor(nome: string, telefone: string, endereco: string, historico: string) {
        this.historico = historico
        this.endereco = endereco
        this.nome = nome
        this.telefone = telefone
    }
    mostrarUsuario() {
        console.log('---------------USUARIO---------------')
        console.log(`NOME: ${this.nome}`)
        console.log(`TELEFONE: ${this.telefone}`)
        console.log(`ENDEREÇO: ${this.endereco}`)
        console.log(`HISTORICO: ${this.historico}`)
        console.log('-------------------------------------')
    }
}

const usuario = new Usuario("Alisson", "84991140714", "Rua Rio Novo,200", "7 Livros emprestados, todos devolvidos no prazo")
console.log(usuario.mostrarUsuario())

//registrar empretimos de livros 
class Emprestimo {
    data_E: Date;
    data_D: Date;
    usuario: Usuario;
    livro_E: Livro;

    constructor(data_E: Date, data_D: Date, usuario: Usuario, livro_E: Livro) {
        this.data_D = data_D
        this.data_E = data_E
        this.livro_E = livro_E
        this.usuario = usuario

    }
    mostrarEmprestimo() {
        console.log('-------------------EMPRESTIMO--------------')
        console.log(`DATA DE EMPRESTIMO: ${this.data_E}`)
        console.log(`DATA DE DEVOLUÇÃO: ${this.data_D}`)
        console.log(`LIVRO EMPRESTADO: ${this.livro_E}`)
        console.log(`USUARIO: ${this.usuario}`)
        console.log(`--------------------------------------------`)
    }
}

const emprestimo = new Emprestimo(new Date("2024-2-20"), new Date("2024-3-20"), usuario, livro)
console.log(emprestimo.mostrarEmprestimo())
