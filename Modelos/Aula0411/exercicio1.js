const io = require("../../BaseProjectJS/io")
let precos = []
let i = 0
while (i >= 0) {
    io.write("Escreva o preço do produto")
    precos[i] = io.readInt()
    if (precos[i] < 0) {
        break
    }
    i++
} 
let precosFiltrados = precos.filter(function(x){
    if(x > 0) {
        return true
    } else {
        return false
    }
})
let Maior500 = 0
for (let index = 0; index < precosFiltrados.length; index++) {
    if (precosFiltrados[index] > 500) {
        Maior500 = Maior500 + 1
    }    
}
let quaisMaiores = precosFiltrados.filter(function (x) {
    if (x > 500) {
        return true
    }
    else { return false}
})
let todos199 = precosFiltrados.every(function(x){
    if (x > 1.99) {
        return true
    } else {
        return false
    }
})
let algum1000 = precosFiltrados.some(function(x){
    if (x > 1000) {
        return true
    } else {
        return false
    }
})
io.write(Maior500 + " produtos custam mais de 500 reais")
io.write("Esses são os preços maiores de 500: " + quaisMaiores)

if (todos199 === true) {
    io.write("Todos os preços são maiores que 1,99")
} else {
      io.write("Nem todos os preços são maiores que 1,99")
} 
if (algum1000 === true) {
    io.write("Existem produtos que custam mais de 1000 reais")
} else {
    io.write("Não existem produtos que custam mais de 1000 reais")
}