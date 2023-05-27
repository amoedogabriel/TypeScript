"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Turno_1 = require("../src/aula3/Turno");
console.log("Adicionando turma...");
var turmas = [];
function adicionarTurma(turmas, turma) {
    console.log("Adicionando turma...");
    turmas.push(turma);
    console.log("Turma adicionada!");
    return turmas;
}
function deletarTurma(turmas, posicao) {
    console.log("Deletando turma...");
    turmas.splice(posicao, 1);
    console.log("Turma deletada!");
    return turmas;
}
function buscarTurma(turmas, id) {
    console.log("Pesquisando turma...");
    for (var _i = 0, turmas_1 = turmas; _i < turmas_1.length; _i++) {
        var turma = turmas_1[_i];
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
function imprimirTurmas(turmas) {
    for (var _i = 0, turmas_2 = turmas; _i < turmas_2.length; _i++) {
        var turma = turmas_2[_i];
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
function pegarTamanho(turmas) {
    return turmas.length;
}
var Curso = /** @class */ (function () {
    function Curso(descricao, area) {
        this.descricao = descricao;
        this.area = area;
    }
    return Curso;
}());
var Turma = /** @class */ (function () {
    function Turma(id, descricao, turno, curso) {
        this.id = id;
        this.descricao = descricao;
        this.turno = turno;
        this.curso = curso;
    }
    Turma.prototype.alterarDescricao = function (descricao) {
        this.descricao = descricao;
    };
    return Turma;
}());
var curso = new Curso("Ciências da Computação", "Exatas");
var turma1 = new Turma(1, "Fundamentos de Typescript", Turno_1.Turno.NOITE, curso);
var turma2 = new Turma(2, "Fundamentos de Node", Turno_1.Turno.MANHA, curso);
var turma3 = new Turma(3, "Fundamentos de Banco de Dados", Turno_1.Turno.TARDE, curso);
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
