import { Conta } from './Conta';

export class ContaPJ extends Conta {
    private cnpj: string;
    private razaoSocial: string;
  
    constructor(cnpj: string, razaoSocial: string, saldoInicial: number = 0) {
      super(saldoInicial);
      this.cnpj = cnpj;
      this.razaoSocial = razaoSocial;
    }
  
    getTipoConta(): string {
      return 'Pessoa Jurídica';
    }
}