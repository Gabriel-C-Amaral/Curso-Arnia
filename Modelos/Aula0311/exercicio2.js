const io = require("../../BaseProjectJS/io")
const vetor = [3,5,6,2,1,6,9]
let vet = []
let vetorInverso = vetor.map(function(x){
    vet.unshift(x)
    return x
})
io.write(vet)