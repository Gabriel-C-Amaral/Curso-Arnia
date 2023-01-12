const io = require("../../BaseProjectJS/io")
let z = io.readInt()
let x = new Array(z)
let resultado = 1
for (let iterador = 0; iterador < x.length; iterador++) {
    x[iterador] = 3        
    resultado = resultado * x[iterador]
}
io.write(resultado)