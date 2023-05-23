// Criando uma biblioteca de exemplo
var biblioteca = {
    nome: "Minha Biblioteca",
    livros: [
        {
            titulo: "Livro 1",
            autor: {
                nome: "Autor 1",
                idade: 30
            }
        },
        {
            titulo: "Livro 2",
            autor: {
                nome: "Autor 2",
                idade: 25
            }
        }
    ]
};
// Acessando e imprimindo os livros de cada biblioteca
function imprimirLivros(bibliotecas) {
    for (var _i = 0, bibliotecas_1 = bibliotecas; _i < bibliotecas_1.length; _i++) {
        var biblioteca_1 = bibliotecas_1[_i];
        console.log("Livros da biblioteca ".concat(biblioteca_1.nome, ":"));
        for (var _a = 0, _b = biblioteca_1.livros; _a < _b.length; _a++) {
            var item = _b[_a];
            if ("titulo" in item) {
                console.log("Livro: ".concat(item.titulo, ", Autor: ").concat(item.autor.nome));
            }
            else {
                console.log("Autor: ".concat(item.nome));
            }
        }
        console.log("-------------------------");
    }
}
// Criando uma lista de bibliotecas de exemplo
var bibliotecas = [
    biblioteca,
    {
        nome: "Outra Biblioteca",
        livros: [
            {
                titulo: "Livro 3",
                autor: {
                    nome: "Autor 3",
                    idade: 40
                }
            },
            {
                nome: "Autor 4",
                idade: 35
            }
        ]
    }
];
// Chamando a função para imprimir os livros de cada biblioteca
imprimirLivros(bibliotecas);
