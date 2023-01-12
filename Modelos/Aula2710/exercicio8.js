const io = require("../../BaseProjectJS/io")
let peso
let altura
let imc
io.write("Escreva seu peso: ")
peso = io.readFloat()
io.write("Escreva a sua altura: ")
altura = io.readFloat()
imc = peso / (altura * altura)
if (imc >= 18.5 && imc <= 24.9) {
    io.write("Seu IMC está normal")
}
if (imc >= 25 && imc <= 29.9) {
    io.write("Você está com sobrepeso")
}
if (imc >= 30) {
    io.write("Você está obeso")
}
io.write("Seu imc é " + imc)