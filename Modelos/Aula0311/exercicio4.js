const io = require("../../BaseProjectJS/io")
let pesos = new Array(6)
for (let index = 0; index < pesos.length; index++) {
    pesos[index] = io.readInt()    
}
let media = pesos.reduce(function(x, y){
    return x + y
} ,0)
if (media/pesos.length > 60) {
    io.write("tem a média maior que 60kg")
} else {
    io.write("tem a média menor que 60kg")
}