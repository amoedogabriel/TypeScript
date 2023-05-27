"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPJ = void 0;
var Conta_1 = require("../src/aula2/exercicio6/Conta");
var ContaPJ = /** @class */ (function (_super) {
    __extends(ContaPJ, _super);
    function ContaPJ(cnpj, razaoSocial, saldoInicial) {
        if (saldoInicial === void 0) { saldoInicial = 0; }
        var _this = _super.call(this, saldoInicial) || this;
        _this.cnpj = cnpj;
        _this.razaoSocial = razaoSocial;
        return _this;
    }
    ContaPJ.prototype.getTipoConta = function () {
        return 'Pessoa Jurídica';
    };
    return ContaPJ;
}(Conta_1.Conta));
exports.ContaPJ = ContaPJ;
