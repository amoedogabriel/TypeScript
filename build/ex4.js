"use strict";
const biblioteca = {
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
    for (const biblioteca of bibliotecas) {
        console.log(`Livros da biblioteca ${biblioteca.nome}:`);
        for (const item of biblioteca.livros) {
            if ("titulo" in item) {
                console.log(`Livro: ${item.titulo}, Autor: ${item.autor.nome}`);
            }
            else {
                console.log(`Autor: ${item.nome}`);
            }
        }
        console.log("-------------------------");
    }
}
const bibliotecas = [
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
imprimirLivros(bibliotecas);
