const io = require("../../BaseProjectJS/io")

let a = "The quick brown fox jumps over the lazy dog"
function ReverterPalavras(x) {
    let c = x.split(" ")
    let b = []
    for (let index = 0; index < c.length; index++) {
        if (index === 0) {
            b[index] = c.at(-1)
        } else {
            b[index] =  c.at(-index-1)
        }      
    }
    return b.toString().replaceAll(",", " ")
}
console.log(ReverterPalavras(a))