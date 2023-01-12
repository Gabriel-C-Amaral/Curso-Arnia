const io = require("../../BaseProjectJS/io")
let dia = ["Domingo","Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]
io.write("Escreva o número da semana")
let a = io.readInt()
io. write("O dia da semana correspondente é: " + dia[a-1])