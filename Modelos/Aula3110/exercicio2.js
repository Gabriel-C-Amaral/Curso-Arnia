const io = require("../../BaseProjectJS/io")
function media(nota1, nota2, nota3, letra) {
    if (letra === "a") {
        return (nota1 + nota2 + nota3)/3
    }
    if (letra === "p") {
        return (nota1*5 + nota2*3 + nota3*2)/10
    }
}
let nota1 = io.readInt()
let nota2 = io.readInt()
let nota3 = io.readInt()
let letra = io.read()
let resultado = media(nota1, nota2, nota3, letra)
io.write(resultado)