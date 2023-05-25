type Status = "EM_ESTOQUE" | "ESGOTADO";
class Produto{
private nome: string;
private categoria: string;
private preco: number;
private status: Status;
}

get getNome(){
    return this.nome;
}
get getCategoria(){
    return this.categoria;
}

set setNome(nome: string){
    this.nome=nome;
}
set setCategoria(categoria:string)
{
    this.categoria=categoria;
}