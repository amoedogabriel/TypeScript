"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(nome, categoria, preco, status) {
        this._codigo = this.gerarCodigo();
        this._nome = nome;
        this._categoria = categoria;
        this._preco = preco;
        this._status = status;
    }
    Produto.prototype.gerarCodigo = function () {
        return 'COD123';
    };
    Object.defineProperty(Produto.prototype, "codigo", {
        get: function () {
            return this._codigo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "categoria", {
        get: function () {
            return this._categoria;
        },
        set: function (categoria) {
            this._categoria = categoria;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "preco", {
        get: function () {
            return this._preco;
        },
        set: function (preco) {
            this._preco = preco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (status) {
            this._status = status;
        },
        enumerable: false,
        configurable: true
    });
    return Produto;
}());
exports.Produto = Produto;
