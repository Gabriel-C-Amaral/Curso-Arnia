const io = require("../../BaseProjectJS/io")
let numeros = []
let iterador = 0
let soma = 0
do {
    io.write("Escreva seu numero")
    numeros[iterador] = io.readFloat()
    if (numeros[iterador-1] === -1) {
        break
    }
    soma = soma + numeros[iterador] + 1
    iterador++    
} while (numeros[iterador-1] >= 0);
io.write(soma)