const io = require("../../BaseProjectJS/io")
let num = new Array(10)
io.write("escreva 10 numeros")
for (let index = 0; index < num.length; index++) {
    num[index] = io.readInt()    
}
let elevado = num.map(function(x){
    return x = (x*x)
})
io.write(elevado)