const io = require("../../BaseProjectJS/io")
let vetor = new Array(5)
for (let index = 0; index < vetor.length; index++) {
    vetor[index] = io.readInt()    
}
let ehPar = vetor.every(function(x){
    if (x%2 === 0) {
        return true
    } else {
        return false
    }
})
if (ehPar === true) {
    io.write("Todos são pares")
} else {
    io.write("Não são todos pares")
}
let maisCinq = vetor.some(function(x){
    if (x > 50) {
        return true
    } else {
        return false
    }
})
if (maisCinq === true) {
    io.write("Tem algum numero maior que 50")
} else {
    io.write("Não tem algum numero maior que 50")
}
let vetoraumento = vetor.map(function(aumento){
    return aumento*(1.15)
})
io.write("valor aumentado é" + vetoraumento)
let vetorFiltrado = vetor.filter(function(x){
    if (x%3 === 0) {
        return true
    } else {
        return false
    }
})
io.write(vetorFiltrado)