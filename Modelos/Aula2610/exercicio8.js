const io = require("C:/Users/amara/Desktop/Curso Arnia/BaseProjectJS/io")
let valortotal
let entrada
let parcela
io.write("Qual o valor da mercadoria?")
valortotal = io.readInt()
parcela = math.floor(valortotal/3)
entrada = valortotal-(2*parcela)
io.write("O valor da entrada é " + entrada + "e mais 2 parcelas de " + parcela)