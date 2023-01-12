const io = require("../../BaseProjectJS/io")
let vetor = [1, 2, 3, 4, 5, 6]
let vet = []
let vetorInverso = vetor.map(function(x){
    vet.unshift(x)
    return x
})
io.write(vet)