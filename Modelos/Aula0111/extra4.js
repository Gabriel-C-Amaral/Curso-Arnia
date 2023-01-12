const io = require("../../BaseProjectJS/io")
let nomes = new Array(10)
let notas = new Array(10)
let index = 0
io.write("Escreva o nome do aluno e depois a sua nota")
while (index < 10) {
    nomes[index] = io.read()
    notas[index] = io.readInt()    
    index++
}
let soma = 0
let sum = notas.forEach(function(n){
    soma = n + soma
})
let media = soma/notas.length

for (let index = 0; index < nomes.length; index++) {
    if (notas[index] > media) {
        io.write("O aluno " + nomes[index] + " está acima da média")
    }    
}