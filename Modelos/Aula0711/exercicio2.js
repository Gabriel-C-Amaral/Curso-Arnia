const io = require("../../BaseProjectJS/io")

function arredondar(numero) {
    const numeroarredondado = numero.toFixed(2).toString()
    const valorEmReal = numeroarredondado.replace('.',',')
    const resultado = 'R$' + valorEmReal
    return resultado
}
let a = arredondar(3.792222)
console.log(a)
