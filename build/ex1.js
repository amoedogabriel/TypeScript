"use strict";
const livros = [
    { nome: "Livro 1", preco: 29.99, categoria: "Ficção" },
    { nome: "Livro 2", preco: 39.99, categoria: "Fantasia" },
    { nome: "Livro 3", preco: 24.99, categoria: "Não-ficção" },
    { nome: "Livro 4", preco: 49.99, categoria: "Romance" }
];
livros.forEach(livro => {
    console.log(`Nome: ${livro.nome}, Preço: R$${livro.preco.toFixed(2)}, Categoria: ${livro.categoria}`);
});
