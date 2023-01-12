const io = require("../../BaseProjectJS/io")
let fibonati = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
let a = fibonati[io.readInt()]
let posicao = fibonati.reduce(function(valorAcumulado, valorAtual){
  if (a <= valorAtual) {
    return valorAcumulado
  } 
    return valorAcumulado + valorAtual
  }, 0)
  
io.write(posicao)