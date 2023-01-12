const io = require("../../BaseProjectJS/io")
const vetor = [47,9,2,3,5,'Intruso', 2,3,4]
let vetorFiltrado = vetor.filter(function(x){
    if (typeof x === "number") {
        return true
    } else {
        return false
    }
})
io.write(vetorFiltrado)