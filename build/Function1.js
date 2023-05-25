"use strict";
const musicas = ["Juice", "Shake It Off", "What's Up"];
function executarMusicas(getSongAt) {
    for (let i = 0; i < musicas.length; i++) {
        console.log(getMusica(i));
    }
}
function getMusica(index) {
    return `${musicas[index]}`;
}
executarMusicas(getMusica);
