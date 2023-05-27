import { Livro } from './Livro';
import { CategoriaLivro } from './CategoriaLivro';

const livros: Livro[] = [
  { nome: "Livro 1", preco: 29.99, categoria: CategoriaLivro.Ficcao },
  { nome: "Livro 2", preco: 39.99, categoria: CategoriaLivro.Fantasia },
  { nome: "Livro 3", preco: 24.99, categoria: CategoriaLivro.NaoFiccao },
  { nome: "Livro 4", preco: 49.99 }
];

livros.forEach(livro => {
  const categoria = livro.categoria ? livro.categoria : "Categoria não definida";
  console.log(`Nome: ${livro.nome}, Preço: R$${livro.preco.toFixed(2)}, Categoria: ${categoria}`);
});
