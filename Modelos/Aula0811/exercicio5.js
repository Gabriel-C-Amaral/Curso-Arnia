const personagens = require("./personagens.json")
const episodios = require("./episodios.json")
const io = require("../../BaseProjectJS/io")
io.write("Escreva o número da temporada, numero do episodio e o número da série (1 - bb / 2 - bcs)")
let numtemporada = io.read()
let numEpisodio = io.read()
let numSerie = io.readInt()
let qualserie = episodios.filter(function(x){
    if ((numSerie === 1 && x.series === "Breaking Bad") || (numSerie === 2 && x.series === "Better Call Saul")) {
        return true
    }
})
let resultado = qualserie.filter(function(x){
    if (x.season === numtemporada && x.episode === numEpisodio) {
        return true
    }
})
console.log(resultado)