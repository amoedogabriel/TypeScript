var CategoriaLivro;
(function (CategoriaLivro) {
    CategoriaLivro["Ficcao"] = "Fic\u00E7\u00E3o";
    CategoriaLivro["Fantasia"] = "Fantasia";
    CategoriaLivro["NaoFiccao"] = "N\u00E3o-fic\u00E7\u00E3o";
    CategoriaLivro["Romance"] = "Romance";
})(CategoriaLivro || (CategoriaLivro = {}));
var livros = [
    { nome: "Livro 1", preco: 29.99, categoria: CategoriaLivro.Ficcao },
    { nome: "Livro 2", preco: 39.99, categoria: CategoriaLivro.Fantasia },
    { nome: "Livro 3", preco: 24.99, categoria: CategoriaLivro.NaoFiccao },
    { nome: "Livro 4", preco: 49.99 }
];
livros.forEach(function (livro) {
    var categoria = livro.categoria ? livro.categoria : "Categoria não definida";
    console.log("Nome: ".concat(livro.nome, ", Pre\u00E7o: R$").concat(livro.preco.toFixed(2), ", Categoria: ").concat(categoria));
});
