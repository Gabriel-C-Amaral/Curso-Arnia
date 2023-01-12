const io = require("../../BaseProjectJS/io")
const numeros = [15, 22, 97, 64, 63]
let novalista = numeros.map(function(num){
    if (num%2 === 0) {
       return num*4
    } else {
        return num*3
    }
})
let listafiltrada = novalista.filter(function(n){
    if (n > 100) {
        return true
    } else {
        return false
    }
})
console.log(listafiltrada)