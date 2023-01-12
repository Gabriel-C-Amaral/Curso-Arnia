const io = require("./io")
let brancos
let nulos
let validos
let VotosTotais
io.write("Quantos votos brancos?")
brancos = io.readInt()
io.write("Quantos votos nulos?")
nulos = io.readInt()
io.write("Quantos votos validos?")
validos = io.readInt()
VotosTotais = (brancos + nulos + validos)
io.write("A quantidade de votos totais é " + VotosTotais)
io.write("A porcentagem de votos válidos é " + ((validos / VotosTotais) * 100) + "%")
io.write("A porcentagem de votos brancos é " + ((brancos / VotosTotais) * 100) + "%")
io.write("A porcentagem de votos nulos é " + ((nulos / VotosTotais) * 100) + "%")