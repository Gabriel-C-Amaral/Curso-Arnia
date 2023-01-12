const io = require("../../BaseProjectJS/io")
let aresta
let raio
let volCub
let volEsf
io.write("Escreva o tamanho da aresta do cubo: ")
aresta = io.readFloat()
io.write("Escreva o raio da esfera: ")
raio = io.readFloat()
volCub = aresta * aresta * aresta
volEsf = (raio * 3.14 * raio * 4 * raio) / 3
io.write("O volume do cubo é: " + volCub)
io.write("O volume da esfera é: " + volEsf)
if (volCub > volEsf) {
    io.write("O cubo tem um volume maior")
} else {
    io.write("O volume da esfera é maior")
}