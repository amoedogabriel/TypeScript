import { Status } from './Status';
import { Produto } from './Produto';

class ProdutoInfantil extends Produto {
    private _faixa_etaria: number;
  
    constructor(nome: string, categoria: string, preco: number, status: Status, faixa_etaria: number) {
      super(nome, categoria, preco, status);
      this._faixa_etaria = faixa_etaria;
      this.validarFaixaEtaria();
    }
  
    private validarFaixaEtaria(): void {
      if (this._faixa_etaria > 12) {
        throw new Error('Faixa etária inválida para um produto infantil.');
      }
    }
  
    get faixa_etaria(): number {
      return this._faixa_etaria;
    }
  
    set faixa_etaria(faixa_etaria: number) {
      this._faixa_etaria = faixa_etaria;
      this.validarFaixaEtaria();
    }
  }
  
  const novoProdutoInfantil = new ProdutoInfantil('Shampoo', 'Cuidados Pessoais', 30, Status.ESGOTADO, 12);
  console.log(novoProdutoInfantil);
  