const io = require("C:/Users/amara/Desktop/Curso Arnia/BaseProjectJS/io")
let nota1
let nota2
let nota3
let mediafinal
io.write("Nota 1:")
nota1 = io.readInt()
io.write("Nota 2:")
nota2 = io.readInt()
io.write("Nota 3:")
nota3 = io.readInt()
mediafinal = ((nota1*2)+(nota2*3)+(nota3*5))/10
io.write("Sua nota final é " + mediafinal)