const io = require("../../BaseProjectJS/io")
let x = 1618
let y = x.toString()
let z = y.split("")
let w = []
for (let index = 0; index < z.length; index++) {
    w[index] = Number(z[index])
}
let soma = w.reduce(function (valorAcumulado, valorAtual) {
    return valorAcumulado + valorAtual
  }, 0)
  
console.log(soma)