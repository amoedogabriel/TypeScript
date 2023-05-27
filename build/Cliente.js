"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContaPF_1 = require("../src/aula2/exercicio6/ContaPF");
var ContaPJ_1 = require("../src/aula2/exercicio6/ContaPJ");
var Cliente = /** @class */ (function () {
    function Cliente(nome) {
        this.nome = nome;
        this.contas = [];
    }
    Cliente.prototype.adicionarConta = function (conta) {
        this.contas.push(conta);
    };
    Cliente.prototype.mostrarContas = function () {
        console.log("Cliente: ".concat(this.nome));
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            console.log("Conta: ".concat(conta.getTipoConta(), ", Saldo: R$").concat(conta.getSaldo()));
        }
        console.log('---');
    };
    return Cliente;
}());
var cliente1 = new Cliente('João');
var contaPF1 = new ContaPF_1.ContaPF('12345678900', 'João Silva', 1000);
cliente1.adicionarConta(contaPF1);
var cliente2 = new Cliente('Empresa ABC');
var contaPJ1 = new ContaPJ_1.ContaPJ('12345678900001', 'Empresa ABC', 5000);
var contaPJ2 = new ContaPJ_1.ContaPJ('12345678900002', 'Empresa ABC Filial', 2000);
cliente2.adicionarConta(contaPJ1);
cliente2.adicionarConta(contaPJ2);
cliente1.mostrarContas();
cliente2.mostrarContas();
