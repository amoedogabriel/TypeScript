var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var musicas = ["Juice", "Shake It Off", "What´s Up"];
var pontuacao = [2, 3, 4];
var juncao = __spreadArray(__spreadArray([], musicas, true), pontuacao, true);
console.log(juncao);
