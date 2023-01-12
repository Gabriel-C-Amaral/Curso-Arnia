const io = require("../../BaseProjectJS/io")
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let pares = numeros.filter(function(num){
    if(num%2 === 0) {
        return true
    }
    else{
        return false
    }
})
console.log(pares)
let impares = numeros.filter(function(num){
    if(num%2 !== 0) {
        return true
    }
    else{
        return false
    }
})
console.log(impares)