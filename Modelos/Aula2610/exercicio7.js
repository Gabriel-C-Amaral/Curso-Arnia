const io = require("C:/Users/amara/Desktop/Curso Arnia/BaseProjectJS/io")
let metro
let km
io.write("Qual a velocidade em m/s que você quer converter para km/h?")
metro = io.readInt()
km = metro*3.6
io.write("Resposta: " + km)