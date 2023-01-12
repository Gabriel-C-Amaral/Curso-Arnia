const io = require("../../BaseProjectJS/io")
let numero
io.write("Escreva o número: ")
numero = io.readInt()
if (numero < 10 && numero > 0) {
    io.write("Verdadeiro")
} else {
    io.write("Falso")
}