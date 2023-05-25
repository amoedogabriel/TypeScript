function formatBookTitle(title, category) {
    var formattedTitle = title.indexOf(" ") !== -1 ? title.toLowerCase() : title.toUpperCase();
    console.log("T\u00EDtulo: ".concat(formattedTitle));
    console.log("Categoria: ".concat(category));
    return formattedTitle;
}
// Exemplo de uso:
var livro1Title = "Harry Potter";
var livro1Category = "Fantasia";
formatBookTitle(livro1Title, livro1Category);
