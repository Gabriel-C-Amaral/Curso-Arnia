const io = require("../../BaseProjectJS/io")

let qtdMais90Quilos = 0
let somaIdades = 0
for (let iterador = 0; iterador < 7; iterador++) {
  io.write("Digite o peso da pessoa " + (iterador + 1) + ": ")
  let peso = io.readFloat()
  io.write("Digite a idade da pessoa " + (iterador + 1) + ": ")
  let idade = io.readInt()

  if (peso > 90) {
    qtdMais90Quilos = qtdMais90Quilos + 1
  }
  somaIdades = somaIdades + idade
}

const mediaIdades = somaIdades / 7

io.write(
  "Este grupo possui " +
    qtdMais90Quilos +
    " pessoas com mais de 90 quilos. E a média da idade do grupo é: " +
    Math.round(mediaIdades)
)