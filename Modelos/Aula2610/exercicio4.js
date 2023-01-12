const io = require("C:/Users/amara/Desktop/Curso Arnia/BaseProjectJS/io")
let salarioFixo
let carrosVendidos
let valortotal
let valorporcarro
io.write("Quantos carros foram vendidos?")
carrosVendidos = io.readInt()
io.write("Qual o salário fixo?")
salarioFixo = io.readInt()
valortotal = carrosVendidos*10000
valorporcarro = 10000*0.05
io.write("O salário final é: " + ((valortotal*0.05)+salarioFixo))
io.write("Você ganha R$" + valorporcarro + " por carro vendido")