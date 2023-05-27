export abstract class Conta {
    protected saldo: number;
  
    constructor(saldoInicial: number = 0) {
      this.saldo = saldoInicial;
    }
  
    abstract getTipoConta(): string;
  
    
    getSaldo(): number {
      return this.saldo;
    }
  
    depositar(valor: number): void {
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    }
  
    sacar(valor: number): void {
      if (valor > this.saldo) {
        console.log(`Saldo insuficiente. Saldo atual: R$${this.saldo}`);
      } else {
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
      }
    }
}