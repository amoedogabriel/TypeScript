abstract class Conta {
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
  class ContaPF extends Conta {
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
  
  class ContaPJ extends Conta {
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
  
  class Cliente {
    private nome: string;
    private contas: Conta[];
  
    constructor(nome: string) {
      this.nome = nome;
      this.contas = [];
    }
  
    adicionarConta(conta: Conta): void {
      this.contas.push(conta);
    }
  
    mostrarContas(): void {
      console.log(`Cliente: ${this.nome}`);
      for (const conta of this.contas) {
        console.log(`Conta: ${conta.getTipoConta()}, Saldo: R$${conta.getSaldo()}`);

      }
      console.log('---');
    }
  }
  

  
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
  