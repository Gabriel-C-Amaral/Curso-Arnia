const io = require("../../BaseProjectJS/io")
let num = new Array(5)
io.write("escreva 5 numeros")
for (let index = 0; index < num.length; index++) {
    num[index] = io.readInt()    
}
let soma = 0
let sum = num.forEach(function(x){
    soma = soma + x
})
let media = soma/num.length
let filtrado = num.filter(function(y){
    if (y > media) {
        return true
    } else {
        return false
    }
})
io.write(filtrado)