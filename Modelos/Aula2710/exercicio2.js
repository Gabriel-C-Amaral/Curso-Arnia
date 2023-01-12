const io = require("../../BaseProjectJS/io")
io.write('Escreva o nome do país: ')
let pais = io.read()
if (pais === "Brasil") {
    io.write("É o brasil")
} else {
    io.write("Não é o brasil")
}