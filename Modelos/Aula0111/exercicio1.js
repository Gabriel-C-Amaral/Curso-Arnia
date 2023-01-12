const io = require("../../BaseProjectJS/io")
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numFiltrado = numeros.filter(function(num){
    if (num%2 !== 0) {
        return true
      }
      return false
})
console.log(numFiltrado)
let sum = 0
numFiltrado.forEach(function (valor) {
    sum = sum + valor;
})
console.log(sum)
iterador = 0
while ((sum - iterador) > 0) {
    console.log("Javascript é muito bom")
    iterador = iterador + 1
}