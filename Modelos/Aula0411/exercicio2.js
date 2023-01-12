const io = require("../../BaseProjectJS/io")
const mensagem = [4, 20, 0, 12, 14, 9, 0, 21, 0, 18, 2, 17, 7, 15, 19]
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "z"]
let resolvido = mensagem.map(function(x, y){
    return x = alfabeto[x]
})
io.write(resolvido)