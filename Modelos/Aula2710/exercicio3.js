const io = require("../../BaseProjectJS/io")
let numero
io.write('Escreva o numero: ')
numero = io.readInt()
if (numero % 2 === 0) {
    io.write("É par")
} else {
    io.write("É impar")
}