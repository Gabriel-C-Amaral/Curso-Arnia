const io = require("../../BaseProjectJS/io")
let precos = []
let produtos = []
let i = 0
while (i >= 0) {
    io.write("Escreva o preço do produto")
    precos [i] = io.readInt()
    if (precos [i] < 0) {
        break
    }
    io.write("Escreva o nome do produto")
    produtos [i] = io.read()
    i++
}
let precosFiltrados = precos.filter(function(x){
    if (x > 0) {
        return true
    } else {
        return false
    }
})
io.write("Digite o nome do produto que você quer procurar no estoque")
let prod = io.read()
let procurarProduto = produtos.some(function(x){
    if (x === prod) {
        return true
    } else {
        return false
    }
})
if (procurarProduto === true) {
    io.write("Esse produto está no estoque")
} else {
    io.write("Esse produto não está no estoque")
}
io.write("Procurar produtos mais caros que: ")
let mais = io.readInt()
let maiores = precosFiltrados.filter(function(x){
    if (x > mais) {
        return true
    } else {
        return false
    }
})
io.write(maiores)
io.write("Procurar produtos mais baratos que: ")
let menos = io.readInt()
let menores = precosFiltrados.filter(function(x){
    if (x < menos) {
        return true
    } else {
        return false
    }
})
io.write(menores)
let soma = precosFiltrados.reduce(function (valorAcumulado, valorAtual) {
    if (typeof valorAtual === "string") return valorAcumulado
    return valorAcumulado + valorAtual
  }, 0)
io.write("A média de preços é " + (soma/precosFiltrados.length))
io.write("Digite a porcentagem que você deseja alterar dos preços")
let variacao = io.readInt()
let preocosAlterados = precosFiltrados.map(function(x){
    return x = x + x*(variacao/100)
})
io.write("Os novos precos são " + preocosAlterados)
io.write("escreva o nome do produto que você quer remover")
let remover = io.read()
let index = produtos.findIndex(function(x){
    if (x === remover) return true
  return false
})
produtos.splice(index, 1)
preocosAlterados.splice(index, 1)
io.write(produtos)
io.write(preocosAlterados)