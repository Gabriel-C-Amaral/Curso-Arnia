const io = require("../../BaseProjectJS/io")
function comparar(a, b){
    let x = a.toLowerCase()
    let y = b.toLowerCase()
    let c = x.split('')
    let d = y.split('')

    let contador = 0
for (let index = 0; index < c.length; index++) {
    if (d.includes(c[index]) === true) {
        contador++
    }   
}
if(contador === c.length){
    return console.log("True")
} else {
    return console.log("false")
}
}

const abc = "abctcde"
const def = "edcba"
comparar(abc, def)