const io = require("../../BaseProjectJS/io")
/**
 * 3 - Escreva um programa em javascript que leia do usuário nomes, preços de produtos e quantidade
 * em estoque e guarde estes valores em um vetor. O usuário irá parar de entrar com valores quando digitar
 * um preço negativo. Lembre-se de não guardar o último valor no vetor. Esta questão é parecida com a prova,
 * porém, desta vez quero que cada produto seja um objeto e o vetor de produtos seja um vetor de objetos.
 */
let contador = 0
let preco = []
let negativo = false
while (negativo === false) {
    io.write("Preço: ")
    let valores = io.readInt()
    
    if (valores >= 0) {
        preco.push(valores)
    } else {
        negativo = true
    }
}
io.write(preco)