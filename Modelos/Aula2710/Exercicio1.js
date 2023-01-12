const io = require("../../BaseProjectJS/io")
io.write('Digite o número: ')
const numero = io.readFloat()
if (numero > 100) {
    io.write("é maior")
}
else {
io.write("não é maior")    
}