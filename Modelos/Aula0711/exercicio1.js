const io = require("../../BaseProjectJS/io")
let a = "The quick brown fox jumps over the lazy dog"
let b = a.split("")
let c = b.filter(function(elemento, index){
    if (index%2 !== 0) {
        return true
    } else {
        return false
    }
})
console.log(c)