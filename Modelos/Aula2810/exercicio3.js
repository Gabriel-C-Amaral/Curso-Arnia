const io = require("../../BaseProjectJS/io")
let vetorIdade = new Array(7)
let mediaIdade
let vetorPeso = new Array(7)
let qtdNov = 0
for (let iterador = 0; iterador < vetorIdade.length; iterador++) {
    io.write("Escreva a idade: ")
    vetorIdade[iterador] = io.readFloat()
    io.write("Escreva o peso: ")
    vetorPeso[iterador] = io.readFloat()
    if (vetorPeso[iterador] > 90) {
        qtdNov++
    }
}
mediaIdade = (vetorIdade[0] + vetorIdade[1] + vetorIdade[2] + vetorIdade[3] + vetorIdade[4] + vetorIdade[5] + vetorIdade[6]) / vetorIdade.length
io.write("A média dos pesos é: " + mediaIdade + "e " + qtdNov + " pessoas estão acima dos 90kilos")