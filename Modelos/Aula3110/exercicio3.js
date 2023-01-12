const io = require("../../BaseProjectJS/io")

function data(ano, mes, dia) {
    return ano*360 + mes*30 + dia
}
let ano = io.readInt()
let mes = io.readInt()
let dia = io.readInt()
let qtdDias = data(ano, mes, dia)

io.write(qtdDias)