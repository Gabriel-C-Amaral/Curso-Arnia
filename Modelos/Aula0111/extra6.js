const io = require("../../BaseProjectJS/io")
let salario = []
let filhos = []
let index = 0
let maior = 0
while (index >= 0) {
    io.write("Salário:")
    salario[index] = io.readInt()
    if (salario[index] < 0) {
        break
    }
    io.write("Numero de filhos:")
    filhos[index] = io.readInt()
    index++
}
let salariosfilter = salario.filter(function(pay){
    if (pay > 0) {
        return true
    } else {
        return false
    }
})
let sumSal = 0
let somaSalario = salariosfilter.forEach(function(cada){
    sumSal = sumSal + cada
})
let sumFilho = 0
let somaFilho = filhos.forEach(function(x){
    sumFilho = sumFilho + x
})
for (let index = 0; index < salariosfilter.length; index++) {
    if (salariosfilter[index] > salariosfilter[index -1]) {
        maior = index
    }
}
let above = 0
let acimaCem = salariosfilter.forEach(function(cem){
    if (cem > 100){
        above = above + 1
    }
})
io.write("A média de salário da população é " + sumSal/salariosfilter.length)
io.write("A média de número de filhos é " + sumFilho/filhos.length)
io.write("O maior salário é " + salariosfilter[maior])
io.write(((above/salariosfilter.length)*100) + "% das pessoas recebem acima de R$100 de salário")