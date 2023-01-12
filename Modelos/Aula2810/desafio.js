const io = require("../../BaseProjectJS/io")
let numero
let iterador = 0
let divisiveis = 0
io.write("Escreva um número e descubra se é primo: ")
numero = io.readInt()
while (numero-iterador > 0) {
    if ((numero%(numero-iterador)) === 0) {
        divisiveis++
    }
    iterador++
}
if (divisiveis === 2) {
    io.write('É primo')
} else {
    io.write('Não é primo')
}