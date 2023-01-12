const io = require("../../BaseProjectJS/io")
/**
 * 3 - Escreva um programa em javascript que leia do usuário nomes, preços de produtos e quantidade
 * em estoque e guarde estes valores em um vetor. O usuário irá parar de entrar com valores quando digitar
 * um preço negativo. Lembre-se de não guardar o último valor no vetor. Esta questão é parecida com a prova,
 * porém, desta vez quero que cada produto seja um objeto e o vetor de produtos seja um vetor de objetos.
 */
let negativo = false
let nomes = []
let precos = []
let quantidade = []
let objeto = []
while (negativo === false) {
    io.write("Escreva o nome, preço e quantidade do produto")
    let name = io.read()
    let price = io.readInt()
    let qts = io.readInt()
    
    if (price > 0) {
        precos.push(price)
        nomes.push(name)
        quantidade.push(qts)    
    } else {
        negativo = true
    }
}
for (let index = 0; index < nomes.length; index++) {
    objeto[index] = {
        nomee: nomes[index],
        precros: precos[index],
        qtss: quantidade[index]
    }    
}
io.write(objeto)
let qtdProdutosAcabando = 0
let qtdProdutosExcesso = 0
let produtosAltoRetorno = []
for (let index = 0; index < objeto.length; index++) {
    if (objeto[index].qtss < 5) {
        qtdProdutosAcabando++
    } 
    if (objeto[index].qtss > 30) {
        qtdProdutosExcesso++
    }   
    if (objeto[index].precros > 1000) {
        produtosAltoRetorno.push(objeto[index])
    }
}
io.write(qtdProdutosAcabando + "produtos acabando")
io.write(qtdProdutosExcesso + "produtos com excesso de estoque")
io.write(produtosAltoRetorno)
io.write("Digite o produto que você quer procurar")
let kd = io.read()
let produtoProcurado = objeto.filter(function(x){
  if(x.nomee.includes(kd)){
    return true
  } else {
    return false
  }
})
io.write(produtoProcurado)