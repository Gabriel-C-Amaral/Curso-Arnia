const io = require("../../BaseProjectJS/io")
let nome = new Array(10)
for (let iterador = 0; iterador < nome.length; iterador++) {
    nome[iterador] = io.read()
    
}
let inverso = []

    for (let index = 0; index < nome.length; index++) {
        inverso[index] = nome[(nome.length - index - 1)]        
    }
console.log(inverso)