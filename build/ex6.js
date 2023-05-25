"use strict";
class Conta {
    constructor(saldoInicial = 0) {
        this.saldo = saldoInicial;
    }
    // Getter para o saldo
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    }
    sacar(valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente. Saldo atual: R$${this.saldo}`);
        }
        else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
        }
    }
}
class ContaPF extends Conta {
    constructor(cpf, nome, saldoInicial = 0) {
        super(saldoInicial);
        this.cpf = cpf;
        this.nome = nome;
    }
    getTipoConta() {
        return 'Pessoa Física';
    }
}
class ContaPJ extends Conta {
    constructor(cnpj, razaoSocial, saldoInicial = 0) {
        super(saldoInicial);
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
    }
    getTipoConta() {
        return 'Pessoa Jurídica';
    }
}
class Cliente {
    constructor(nome) {
        this.nome = nome;
        this.contas = [];
    }
    adicionarConta(conta) {
        this.contas.push(conta);
    }
    mostrarContas() {
        console.log(`Cliente: ${this.nome}`);
        for (const conta of this.contas) {
            console.log(`Conta: ${conta.getTipoConta()}, Saldo: R$${conta.getSaldo()}`);
        }
        console.log('---');
    }
}
// Exemplo de uso:
const cliente1 = new Cliente('João');
const contaPF1 = new ContaPF('12345678900', 'João Silva', 1000);
cliente1.adicionarConta(contaPF1);
const cliente2 = new Cliente('Empresa ABC');
const contaPJ1 = new ContaPJ('12345678900001', 'Empresa ABC', 5000);
const contaPJ2 = new ContaPJ('12345678900002', 'Empresa ABC Filial', 2000);
cliente2.adicionarConta(contaPJ1);
cliente2.adicionarConta(contaPJ2);
cliente1.mostrarContas();
cliente2.mostrarContas();
