"use strict";
class Pessoa {
    nome;
    idade;
    genero;
    constructor(nome, idade, genero) {
        this.nome = nome;
        this.idade = idade;
        this.genero;
    }
}
const pessoa1 = new Pessoa('Alisson', 21, 'Masculino');
const pessoa2 = new Pessoa('Carlos', 25, 'Masculino');
