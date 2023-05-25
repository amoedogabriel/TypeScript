const musicas = ["Juice", "Shake It Off", "What's Up"];
function executarMusicas(getSongAt: (index:number) => string){
 for(let i=0; i<musicas.length;i++){
 console.log(getMusica(i)); 
 }
}
function getMusica(index:number): string{
 return `${musicas[index]}`;
}
executarMusicas(getMusica);