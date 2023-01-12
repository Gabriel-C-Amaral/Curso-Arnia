const io = require("../../BaseProjectJS/io")
let a = "The quick brown fox jumps over the lazy dog"
let c= a.split("")
let b = []
       for (let index = 0; index < c.length; index++) {
        if (index === 0) {
            c[index] = b.at(-1)
        } else {
            c[index] = b.at(-index-1)
        }
       } 
console.log(b)