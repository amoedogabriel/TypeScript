var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var _this = this;
var Turno;
(function (Turno) {
    Turno["MANHA"] = "Manh\u00E3";
    Turno["TARDE"] = "Tarde";
    Turno["NOITE"] = "Noite";
})(Turno || (Turno = {}));
var Area;
(function (Area) {
    Area["HUMANAS"] = "Humanas";
    Area["BIOLOGICAS"] = "Biol\u00F3gicas";
    Area["EXATAS"] = "Exatas";
})(Area || (Area = {}));
function validateLength(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var value = args[0];
        if (value.length < 10) {
            throw new Error("O campo '".concat(propertyKey, "' deve ter no m\u00EDnimo 10 caracteres."));
        }
        return originalMethod.apply(this, args);
    };
}
var Turma = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _adicionar_decorators;
    var _alterar_decorators;
    return _a = /** @class */ (function () {
            function Turma(id, descricao, turno, cursoDescricao, cursoArea) {
                this.id = (__runInitializers(this, _instanceExtraInitializers), void 0);
                this.id = id;
                this.descricao = descricao;
                this.turno = turno;
                this.curso = {
                    descricao: cursoDescricao,
                    area: cursoArea,
                };
            }
            Turma.prototype.adicionar = function (descricao, turno, cursoDescricao, cursoArea) {
                var novaTurma = new Turma(this.id + 1, descricao, turno, cursoDescricao, cursoArea);
                turmas.push(novaTurma);
            };
            Turma.prototype.excluir = function (id) {
                var index = turmas.findIndex(function (turma) { return turma.id === id; });
                if (index !== -1) {
                    turmas.splice(index, 1);
                }
            };
            Turma.prototype.alterar = function (id, descricao, turno, cursoDescricao, cursoArea) {
                var turma = this.buscar(id);
                if (turma) {
                    turma.descricao = descricao;
                    turma.turno = turno;
                    turma.curso.descricao = cursoDescricao;
                    turma.curso.area = cursoArea;
                }
            };
            Turma.prototype.buscar = function (id) {
                for (var _i = 0, turmas_1 = turmas; _i < turmas_1.length; _i++) {
                    var turma = turmas_1[_i];
                    if (turma.id === id) {
                        return turma;
                    }
                }
                return null;
            };
            Turma.prototype.imprimir = function () {
                for (var _i = 0, turmas_2 = turmas; _i < turmas_2.length; _i++) {
                    var turma = turmas_2[_i];
                    console.log("ID: ".concat(turma.id));
                    console.log("Descri\u00E7\u00E3o: ".concat(turma.descricao));
                    console.log("Turno: ".concat(turma.turno));
                    console.log("Curso: ".concat(turma.curso.descricao));
                    console.log("\u00C1rea: ".concat(turma.curso.area));
                    console.log('---------------------');
                }
            };
            return Turma;
        }()),
        (function () {
            _adicionar_decorators = [validateLength];
            _alterar_decorators = [validateLength];
            __esDecorate(_a, null, _adicionar_decorators, { kind: "method", name: "adicionar", static: false, private: false, access: { has: function (obj) { return "adicionar" in obj; }, get: function (obj) { return obj.adicionar; } } }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _alterar_decorators, { kind: "method", name: "alterar", static: false, private: false, access: { has: function (obj) { return "alterar" in obj; }, get: function (obj) { return obj.alterar; } } }, null, _instanceExtraInitializers);
        })(),
        _a;
}();
var turmas = [];
var turma1 = new Turma(1, 'Turma A', Turno.MANHA, 'Curso A', Area.EXATAS);
turmas.push(turma1);
try {
    turma1.adicionar('Turma B', Turno.TARDE, 'Curso B', Area.HUMANAS);
}
catch (error) {
    console.log(error.message);
}
turma1.imprimir();
