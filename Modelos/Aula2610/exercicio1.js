const io = require("C:/Users/amara/Desktop/Curso Arnia/BaseProjectJS/io")
let f
let c
io.write("Qual a temperatura em Fahrenheit?")
f = io.readInt()
c = ((f-32)/9)*5
io.write(c)