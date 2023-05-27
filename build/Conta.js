"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(saldoInicial) {
        if (saldoInicial === void 0) { saldoInicial = 0; }
        this.saldo = saldoInicial;
    }
    Conta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo += valor;
        console.log("Dep\u00F3sito de R$".concat(valor, " realizado. Novo saldo: R$").concat(this.saldo));
    };
    Conta.prototype.sacar = function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente. Saldo atual: R$".concat(this.saldo));
        }
        else {
            this.saldo -= valor;
            console.log("Saque de R$".concat(valor, " realizado. Novo saldo: R$").concat(this.saldo));
        }
    };
    return Conta;
}());
exports.Conta = Conta;
