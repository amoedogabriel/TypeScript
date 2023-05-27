"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turma = void 0;
var Turma = exports.Turma = /** @class */ (function () {
    function Turma(_id, _descricao, _turno, _curso) {
        this._id = _id;
        this._descricao = _descricao;
        this._turno = _turno;
        this._curso = _curso;
        this._id = Turma.contadorId++;
    }
    Object.defineProperty(Turma.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Turma.prototype, "descricao", {
        get: function () {
            return this._descricao;
        },
        set: function (descricao) {
            this._descricao = descricao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Turma.prototype, "turno", {
        get: function () {
            return this._turno;
        },
        set: function (turno) {
            this._turno = turno;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Turma.prototype, "curso", {
        get: function () {
            return this._curso;
        },
        set: function (curso) {
            this._curso = curso;
        },
        enumerable: false,
        configurable: true
    });
    Turma.contadorId = 1;
    return Turma;
}());
