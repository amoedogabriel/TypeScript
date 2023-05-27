import { Status } from './Status';

export class Produto {
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