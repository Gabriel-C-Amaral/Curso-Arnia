const io = require("../../BaseProjectJS/io")
let dados = 
    {
        nome: io.read(),
        idade: io.readInt(),
        endereco: {
            rua: io.read(),
            numero: io.readInt(),
            bairro: io.read(),
            cidade: io.read(),
            uf: io.read()
        },
        estadocivil: io.read()
    }

io.write(dados.nome + "," + dados.idade + "," + "que mora na rua " + dados.endereco.rua + " " + dados.endereco["numero"])