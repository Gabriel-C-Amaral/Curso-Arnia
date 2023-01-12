const io = require("../../BaseProjectJS/io")
let usuario = new Array(3)
let senha = new Array(3)
for (let index = 0; index < 3; index++) {
    io.write("Cadastre seu usuário: ")
    usuario[index] = io.read()
    io.write("Cadastre sua senha:")
    senha[index] = io.read()    
}
io.write("Escreva seu usuario: ")
let user = io.read()
io.write("Escreva sua senha")
let pass = io.read()
let validado = 0
for (let index = 0; index < 3; index++) {
    if (user === usuario[index] && pass === senha[index]) {
        validado++
    }    
}
if (validado === 1) {
    io.write("Validado")
} else {
    io.write("Não validado")
} 