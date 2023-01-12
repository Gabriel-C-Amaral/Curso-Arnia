const io = require("C:/Users/amara/Desktop/Curso Arnia/BaseProjectJS/io")
let custoFabrica
let custofinal
io.write("Qual o custo da fábrica?")
custoFabrica = io.readInt()
io.write("O custo final é: " + ((custoFabrica*0.28)+custoFabrica+(custoFabrica*0.45)))