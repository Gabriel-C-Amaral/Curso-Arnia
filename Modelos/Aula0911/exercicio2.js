const io = require("../../BaseProjectJS/io")

//2 - Considere o objeto abaixo:
//*/

const usuarios = [
 {
   nome: "Douglas",
   habilidades: ["Javascript", "ReactJS", "Redux"],
 },
 {
   nome: "Elton",
   habilidades: ["PHP", "Ruby on Rails", "Laravel"],
 },
]

/**
* Escreva uma função que retorne o seguinte resultado:
* O Douglas possui as habilidades: Javascript, ReactJS, Redux
* O Elton possui as habilidades: PHP, Ruby on Rails, Laravel
*/
let a = usuarios.map(function(x){
    return x.nome + " possui as habilidades: " + x.habilidades.toString()
})
console.log(a)