const io = require("../../BaseProjectJS/io")
let nome =  new Array(10)
let normal = new Array(5)
let inverso = new Array(5)
for (let index = 0; index < nome.length; index++) {
    nome[index] = io.read()    
}
for (let index = 0; index < normal.length; index++) {
    normal[index] = nome[index]
    
}
console.log(normal)
let i = 0
for (let index = 5; index < (nome.length); index++) {
    inverso[index-5] = nome[(nome.length - i - 1)] 
    i = i + 1       
}
console.log(inverso)