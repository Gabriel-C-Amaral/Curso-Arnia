const personagens = require("./personagens.json")
const episodios = require("./episodios.json")
const io = require("../../BaseProjectJS/io")
let primeirosEpi = episodios.filter(function(x){
    return x.episode === "1"
})

console.log(primeirosEpi)