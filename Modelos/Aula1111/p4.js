const io = require("../../BaseProjectJS/io")
function somar (x){
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
}
let teste = 56987
somar(teste)