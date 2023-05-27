import { ContaPF } from './ContaPF';
import { ContaPJ } from './ContaPJ';
import { Conta } from './Conta';

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
  