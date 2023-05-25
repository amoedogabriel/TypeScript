enum Status {
    DISPONIVEL = 'DISPONIVEL',
    ESGOTADO = 'ESGOTADO',
  }
  
  class Produto {
    private _codigo: string;
    private _nome: string;
    private _categoria: string;
    private _preco: number;
    private _status: Status;
  
    constructor(nome: string, categoria: string, preco: number, status: Status) {
      this._codigo = this.gerarCodigo();
      this._nome = nome;
      this._categoria = categoria;
      this._preco = preco;
      this._status = status;
    }
  
    private gerarCodigo(): string {
     
      return 'COD123';
    }
  
    protected get codigo(): string {
      return this._codigo;
    }
  
    get nome(): string {
      return this._nome;
    }
  
    set nome(nome: string) {
      this._nome = nome;
    }
  
    get categoria(): string {
      return this._categoria;
    }
  
    set categoria(categoria: string) {
      this._categoria = categoria;
    }
  
    get preco(): number {
      return this._preco;
    }
  
    set preco(preco: number) {
      this._preco = preco;
    }
  
    get status(): Status {
      return this._status;
    }
  
    set status(status: Status) {
      this._status = status;
    }
  }
  
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
  