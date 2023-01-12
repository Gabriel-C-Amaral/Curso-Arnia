const io = require("./io")
let salario
let reajuste
let aumento
io.write("Escreva seu salário:")
salario = io.readInt()
io.write("Qual o percentual de reajuste?")
reajuste = io.readInt()
aumento = salario * (reajuste / 100)
io.write("Seu novo salário é: " + (salario+aumento))