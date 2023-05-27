import { CategoriaLivro } from './CategoriaLivro';

export interface Livro {
    nome: string;
    preco: number;
    categoria?: CategoriaLivro;
}