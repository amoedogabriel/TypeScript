"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Status_1 = require("../src/aula2/exercicio5/Status");
var Produto_1 = require("../src/aula2/exercicio5/Produto");
var ProdutoInfantil = /** @class */ (function (_super) {
    __extends(ProdutoInfantil, _super);
    function ProdutoInfantil(nome, categoria, preco, status, faixa_etaria) {
        var _this = _super.call(this, nome, categoria, preco, status) || this;
        _this._faixa_etaria = faixa_etaria;
        _this.validarFaixaEtaria();
        return _this;
    }
    ProdutoInfantil.prototype.validarFaixaEtaria = function () {
        if (this._faixa_etaria > 12) {
            throw new Error('Faixa etária inválida para um produto infantil.');
        }
    };
    Object.defineProperty(ProdutoInfantil.prototype, "faixa_etaria", {
        get: function () {
            return this._faixa_etaria;
        },
        set: function (faixa_etaria) {
            this._faixa_etaria = faixa_etaria;
            this.validarFaixaEtaria();
        },
        enumerable: false,
        configurable: true
    });
    return ProdutoInfantil;
}(Produto_1.Produto));
var novoProdutoInfantil = new ProdutoInfantil('Shampoo', 'Cuidados Pessoais', 30, Status_1.Status.ESGOTADO, 12);
console.log(novoProdutoInfantil);
