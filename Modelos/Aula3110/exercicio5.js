const io = require("../../BaseProjectJS/io")
function par(numero) {
    if (numero%2 === 0) {
        return "true"
    } else {
        return "false"
    }
 
}
let numero = io.readInt()
if (par(numero) === "true") {
    io.write("é par")
} else {
    io.write("É impar")
}