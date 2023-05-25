var musicas = ["Juice", "Shake It Off", "What's Up"];
function executarMusicas(getSongAt) {
    for (var i = 0; i < musicas.length; i++) {
        console.log(getMusica(i));
    }
}
function getMusica(index) {
    return "".concat(musicas[index]);
}
executarMusicas(getMusica);
