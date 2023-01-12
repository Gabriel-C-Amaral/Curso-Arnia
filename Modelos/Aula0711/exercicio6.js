const io = require("../../BaseProjectJS/io")

let a = "The quick brown fox jumps over the lzy dog"
function contarVogais(x) {
    let b = ["a", "e", "i", "o", "u"]
    let contador = 0
    for (let index = 0; index < x.length; index++) {
        if (x.includes(b[index])) {
            contador++
        }        
    }
    return contador
}
io.write(contarVogais(a))