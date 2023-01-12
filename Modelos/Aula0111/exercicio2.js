const io = require("../../BaseProjectJS/io")
const vetor = [1000, 40, 340, 501, 500, 1093, 245, 21]
let precoAtualizado = vetor.map(function(preco){
    if (preco > 500) {
       return preco *1.15
    } else {
        return preco
    }
})
console.log(precoAtualizado)