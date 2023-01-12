const io = require("../../BaseProjectJS/io")
let a
let b
let c
let x1
let x2
let delta
io.write("Escreva o valor de a")
a = io.readFloat()
io.write("Escreva o valor de b")
b = io.read()
io.write("Escreva o valor de c")
c = io.readFloat()
delta = Math.sqrt((b*b)-(4*a*c))
io.write(delta)
x1 = -b + delta
io.write("As raizes de x são: ")