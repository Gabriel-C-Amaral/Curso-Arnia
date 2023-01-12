const io = require("C:/Users/amara/Desktop/Curso Arnia/BaseProjectJS/io")
let anos
let quantosDia
io.write("Quantos anos você fuma?")
anos = io.readInt()
io.write("Quantos cigarros por dia?")
quantosDia = io.readInt()
io.write("Você já gastou: " + "R$" + ((quantosDia*365*anos)/20)*10)