import { Turno } from './Turno';
import { Curso } from './Curso';


export class Turma {
  [x: string]: any;
  private static contadorId: number = 1;

  constructor(
    private _id: number,
    private _descricao: string,
    private _turno: Turno,
    private _curso: Curso
  ) {
    this._id = Turma.contadorId++;
  }

  get id(): number {
    return this._id;
  }

  get descricao(): string {
    return this._descricao;
  }

  set descricao(descricao: string) {
    this._descricao = descricao;
  }

  get turno(): Turno {
    return this._turno;
  }

  set turno(turno: Turno) {
    this._turno = turno;
  }

  get curso(): Curso {
    return this._curso;
  }

  set curso(curso: Curso) {
    this._curso = curso;
  }
}

