const personagens = require("./personagens.json")
const episodios = require("./episodios.json")
const io = require("../../BaseProjectJS/io")
let apareceBCS = personagens.filter(function(x){
    return x.better_call_saul_appearance.length !== 0
})
let nomesBCS = apareceBCS.map(function(x){
    return x.name
})
console.log(nomesBCS)