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
var ContaPF = /** @class */ (function (_super) {
    __extends(ContaPF, _super);
    function ContaPF(cpf, nome, saldoInicial) {
        if (saldoInicial === void 0) { saldoInicial = 0; }
        var _this = _super.call(this, saldoInicial) || this;
        _this.cpf = cpf;
        _this.nome = nome;
        return _this;
    }
    ContaPF.prototype.getTipoConta = function () {
        return 'Pessoa Física';
    };
    return ContaPF;
}(Conta));
var ContaPJ = /** @class */ (function (_super) {
    __extends(ContaPJ, _super);
    function ContaPJ(cnpj, razaoSocial, saldoInicial) {
        if (saldoInicial === void 0) { saldoInicial = 0; }
        var _this = _super.call(this, saldoInicial) || this;
        _this.cnpj = cnpj;
        _this.razaoSocial = razaoSocial;
        return _this;
    }
    ContaPJ.prototype.getTipoConta = function () {
        return 'Pessoa Jurídica';
    };
    return ContaPJ;
}(Conta));
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
var contaPF1 = new ContaPF('12345678900', 'João Silva', 1000);
cliente1.adicionarConta(contaPF1);
var cliente2 = new Cliente('Empresa ABC');
var contaPJ1 = new ContaPJ('12345678900001', 'Empresa ABC', 5000);
var contaPJ2 = new ContaPJ('12345678900002', 'Empresa ABC Filial', 2000);
cliente2.adicionarConta(contaPJ1);
cliente2.adicionarConta(contaPJ2);
cliente1.mostrarContas();
cliente2.mostrarContas();
