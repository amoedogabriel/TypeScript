type CategoriaLivro = string; 

function formatBookTitle(title: string, category: CategoriaLivro): string {
  const formattedTitle = title.indexOf(" ") !== -1 ? title.toLowerCase() : title.toUpperCase();
  
  console.log(`Título: ${formattedTitle}`);
  console.log(`Categoria: ${category}`);
  
  return formattedTitle;
}


const livro1Title = "Harry Potter";
const livro1Category: CategoriaLivro = "Fantasia";
formatBookTitle(livro1Title, livro1Category);
