const io = require("../../BaseProjectJS/io")
let a = "fhaiosfioas"
let b = "abcdefg"
function resultado(a, b) {
    let c = []
    for (let index = 0; index < a.length; index++) {
        if (a.includes(b[index]) === false) {
            c[index] = b[index]
        } else {
            c[index] = undefined
        }    
    }
let d = c.filter(function(x){
    if (x === undefined) {
        return false
    } else {
        return true
    }
})
return d
    
}

console.log(resultado(a, b))