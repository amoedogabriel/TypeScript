"use strict";
var Status;
(function (Status) {
    Status["DISPONIVEL"] = "DISPONIVEL";
    Status["ESGOTADO"] = "ESGOTADO";
})(Status || (Status = {}));
class Produto {
    constructor(nome, categoria, preco, status) {
        this._codigo = this.gerarCodigo();
        this._nome = nome;
        this._categoria = categoria;
        this._preco = preco;
        this._status = status;
    }
    gerarCodigo() {
        // Implemente a lógica para gerar um código único para o produto
        // Pode ser um número aleatório ou baseado em algum critério específico
        return 'COD123';
    }
    get codigo() {
        return this._codigo;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get categoria() {
        return this._categoria;
    }
    set categoria(categoria) {
        this._categoria = categoria;
    }
    get preco() {
        return this._preco;
    }
    set preco(preco) {
        this._preco = preco;
    }
    get status() {
        return this._status;
    }
    set status(status) {
        this._status = status;
    }
}
class ProdutoInfantil extends Produto {
    constructor(nome, categoria, preco, status, faixa_etaria) {
        super(nome, categoria, preco, status);
        this._faixa_etaria = faixa_etaria;
        this.validarFaixaEtaria();
    }
    validarFaixaEtaria() {
        if (this._faixa_etaria > 12) {
            throw new Error('Faixa etária inválida para um produto infantil.');
        }
    }
    get faixa_etaria() {
        return this._faixa_etaria;
    }
    set faixa_etaria(faixa_etaria) {
        this._faixa_etaria = faixa_etaria;
        this.validarFaixaEtaria();
    }
}
const novoProdutoInfantil = new ProdutoInfantil('Shampoo', 'Cuidados Pessoais', 30, Status.ESGOTADO, 12);
console.log(novoProdutoInfantil);
