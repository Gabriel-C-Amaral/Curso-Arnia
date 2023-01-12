const io = require("../../BaseProjectJS/io")
let z = io.readInt()
let y = io.readInt()
function potencia(y, z) {
    let x = new Array(z)
let resultado = 1
for (let iterador = 0; iterador < z; iterador++) {
    x[iterador] = y
    resultado = resultado * x[iterador]
}
return io.write(resultado)
}
potencia(y, z)