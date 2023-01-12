const io = require("../../BaseProjectJS/io")
function volumeEsfera(raio) {
    return ((raio*raio*raio*3.14*4)/3)
}
let raio = io.readInt()
let volume = volumeEsfera(raio)
io.write(volume)