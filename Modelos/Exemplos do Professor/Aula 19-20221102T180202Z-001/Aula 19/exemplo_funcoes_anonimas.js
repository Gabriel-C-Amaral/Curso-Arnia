const io = require("./io")

let myFunction = function () {
  return "Esta função retorna uma string"
}

let myFunction2 = function () {
  return "Esta função retorna outra string"
}

function escreveRetornoDaFuncao(fn) {
  const retorno = fn()
  console.log(retorno)
}

escreveRetornoDaFuncao(myFunction)
escreveRetornoDaFuncao(myFunction2)
