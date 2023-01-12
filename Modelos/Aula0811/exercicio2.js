const personagens = require("./personagens.json")
const episodios = require("./episodios.json")
const io = require("../../BaseProjectJS/io")
let apelidos = personagens.map(function(x){
    return x.nickname
})
console.log(apelidos)