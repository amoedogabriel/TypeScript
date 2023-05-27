import { Conta } from './Conta';

export class ContaPF extends Conta {
    private cpf: string;
    private nome: string;
  
    constructor(cpf: string, nome: string, saldoInicial: number = 0) {
      super(saldoInicial);
      this.cpf = cpf;
      this.nome = nome;
    }
  
    getTipoConta(): string {
      return 'Pessoa Física';
    }
}