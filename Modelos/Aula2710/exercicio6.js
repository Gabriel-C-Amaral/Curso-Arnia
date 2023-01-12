const io = require("../../BaseProjectJS/io")

io.write("Escreva o primeiro lado:")
let a = io.readInt()
io.write("Escreva o segundo lado:")
let b = io.readInt()
io.write("Escreva o terceiro lado:")
let c = io.readInt()
if ((a > b && a > c && a < (b+c)) || (b > a && b > c && b < (a+c)) || (c > b && c > a && c < (b+a)) || (a === b === c)) {
    io.write("É triangulo")
} else {
    io.write("Não é triangulo")
}
