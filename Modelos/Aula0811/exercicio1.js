const personagens = require("./personagens.json")
const episodios = require("./episodios.json")
const io = require("../../BaseProjectJS/io")
let personagensVivos = personagens.filter(function(x){
   return x.status === "Alive"
})
let nomesVivos = personagensVivos.map(function(x){
    return x.name
})
console.log(nomesVivos)