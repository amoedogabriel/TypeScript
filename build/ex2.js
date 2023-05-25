"use strict";
var CategoriaLivro;
(function (CategoriaLivro) {
    CategoriaLivro["Ficcao"] = "Fic\u00E7\u00E3o";
    CategoriaLivro["Fantasia"] = "Fantasia";
    CategoriaLivro["NaoFiccao"] = "N\u00E3o-fic\u00E7\u00E3o";
    CategoriaLivro["Romance"] = "Romance";
})(CategoriaLivro || (CategoriaLivro = {}));
const livros = [
    { nome: "Livro 1", preco: 29.99, categoria: CategoriaLivro.Ficcao },
    { nome: "Livro 2", preco: 39.99, categoria: CategoriaLivro.Fantasia },
    { nome: "Livro 3", preco: 24.99, categoria: CategoriaLivro.NaoFiccao },
    { nome: "Livro 4", preco: 49.99 }
];
livros.forEach(livro => {
    const categoria = livro.categoria ? livro.categoria : "Categoria não definida";
    console.log(`Nome: ${livro.nome}, Preço: R$${livro.preco.toFixed(2)}, Categoria: ${categoria}`);
});
