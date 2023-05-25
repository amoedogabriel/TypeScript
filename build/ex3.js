"use strict";
function formatBookTitle(title, category) {
    const formattedTitle = title.includes(" ") ? title.toLowerCase() : title.toUpperCase();
    console.log(`Título: ${formattedTitle}`);
    console.log(`Categoria: ${category}`);
    return formattedTitle;
}
// Exemplo de uso:
const livro1Title = "Harry Potter";
const livro1Category = "Fantasia";
formatBookTitle(livro1Title, livro1Category);
