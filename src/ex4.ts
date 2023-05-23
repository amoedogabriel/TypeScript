type Autor = {
    nome: string;
    idade: number;
  };
  
  type Livro = {
    titulo: string;
    autor: Autor;
  };
  
  type Biblioteca = {
    nome: string;
    livros: (Autor | Livro)[];
  };
  
  // Criando uma biblioteca de exemplo
  const biblioteca: Biblioteca = {
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
  function imprimirLivros(bibliotecas: Biblioteca[]): void {
    for (const biblioteca of bibliotecas) {
      console.log(`Livros da biblioteca ${biblioteca.nome}:`);
      for (const item of biblioteca.livros) {
        if ("titulo" in item) {
          console.log(`Livro: ${item.titulo}, Autor: ${item.autor.nome}`);
        } else {
          console.log(`Autor: ${item.nome}`);
        }
      }
      console.log("-------------------------");
    }
  }
  
  // Criando uma lista de bibliotecas de exemplo
  const bibliotecas: Biblioteca[] = [
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
  