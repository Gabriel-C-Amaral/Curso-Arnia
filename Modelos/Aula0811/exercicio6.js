const personagens = require("./personagens.json")
const episodios = require("./episodios.json")
const io = require("../../BaseProjectJS/io")
io.write("Escreva o nome do personagem e descubra em quais episodios ele aparece")
let a = io.read()
let aparece = episodios.filter(function(x){
    return x.characters.includes(a)
})
console.log(aparece)