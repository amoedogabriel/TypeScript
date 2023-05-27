import { Turno } from "../aula3/Turno";
import { Area} from "../aula3/Area";

console.log("Adicionando turma...");

let turmas: Turma[] = [];


function adicionarTurma(turmas: Turma[], turma: Turma): Turma[] {
  console.log("Adicionando turma...");
  turmas.push(turma);
  console.log("Turma adicionada!");
  return turmas;
}

function deletarTurma(turmas: Turma[], posicao: number): Turma[] {
  console.log("Deletando turma...");
  turmas.splice(posicao, 1);
  console.log("Turma deletada!");
  return turmas;
}

function buscarTurma(turmas: Turma[], id: number): boolean {
  console.log("Pesquisando turma...");
  for (let turma of turmas) {
    if (turma.id == id) {
      console.log("ID: " + turma.id);
      console.log("Descrição: " + turma.descricao);
      console.log("Turno: " + turma.turno);
      console.log("Curso: " + turma.curso.descricao);
      if (turma.curso.area != undefined) {
        console.log("Área do curso: " + turma.curso.area);
      }
      console.log("Turma encontrada!");
      return true;
    }
  }
  console.log("Turma não encontrada!");
  return false;
}

function imprimirTurmas(turmas: Turma[]): void {
  for (let turma of turmas) {
    console.log("ID: " + turma.id);
    console.log("Descrição: " + turma.descricao);
    console.log("Turno: " + turma.turno);
    console.log("Curso: " + turma.curso.descricao);
    if (turma.curso.area != undefined) {
      console.log("Área do curso: " + turma.curso.area);
    }
    console.log("---------------------------");
  }
}

function pegarTamanho(turmas: Turma[]): number {
  return turmas.length;
}

class Curso {
  descricao: string;
  area: string;

  constructor(descricao: string, area: string) {
    this.descricao = descricao;
    this.area = area;
  }
}

class Turma {
  id: number;
  descricao: string;
  turno: Turno;
  curso: Curso;

  constructor(id: number, descricao: string, turno: Turno, curso: Curso) {
    this.id = id;
    this.descricao = descricao;
    this.turno = turno;
    this.curso = curso;
  }

  alterarDescricao(descricao: string): void {
    this.descricao = descricao;
  }
}

let curso = new Curso("Ciências da Computação", "Exatas");

let turma1 = new Turma(1, "Fundamentos de Typescript", Turno.NOITE, curso);
let turma2 = new Turma(2, "Fundamentos de Node", Turno.MANHA, curso);
let turma3 = new Turma(3, "Fundamentos de Banco de Dados", Turno.TARDE, curso);

turmas = adicionarTurma(turmas, turma1);
turmas = adicionarTurma(turmas, turma2);
imprimirTurmas(turmas);
console.log("Número de turmas:", pegarTamanho(turmas));

turmas = deletarTurma(turmas, 0);
imprimirTurmas(turmas);
console.log("Número de turmas:", pegarTamanho(turmas));

turma2.descricao = "NodeJs Avançado";
turma2.alterarDescricao("NodeJs Avançado");
imprimirTurmas(turmas);

turmas = adicionarTurma(turmas, turma3);
imprimirTurmas(turmas);
console.log("Número de turmas:", pegarTamanho(turmas));

buscarTurma(turmas, 1);
buscarTurma(turmas, 2);
