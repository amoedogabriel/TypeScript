type CategoriaLivro = string; // Definindo o tipo CategoriaLivro como uma string

function formatBookTitle(title: string, category: CategoriaLivro): string {
  const formattedTitle = title.includes(" ") ? title.toLowerCase() : title.toUpperCase();
  
  console.log(`Título: ${formattedTitle}`);
  console.log(`Categoria: ${category}`);
  
  return formattedTitle;
}

// Exemplo de uso:
const livro1Title = "Harry Potter";
const livro1Category: CategoriaLivro = "Fantasia";
formatBookTitle(livro1Title, livro1Category);
