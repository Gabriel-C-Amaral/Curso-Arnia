const io = require("../../BaseProjectJS/io")
io.write("Escreva o ano para verificar se é bisexto")
let x = io.readInt()
if (((x%4 === 0) && (x%100 !== 0)) || ((x%4 !== 0) && (x%400 === 0))) {
    io.write("É bisexto")
} else {
    io.write("Não é bisexto")
}