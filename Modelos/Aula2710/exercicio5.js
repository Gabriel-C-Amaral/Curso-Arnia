const io = require("../../BaseProjectJS/io")
let numero1
let numero2
io.write("escreva o primeiro número: ")
numero1 = io.readInt()
io.write("escreva o segundo número: ")
numero2 = io.readInt()
if (numero1 > numero2) {
    io.write("O primeiro valor é maior")
} else {
    io.write("O segundo valor é maior")
}