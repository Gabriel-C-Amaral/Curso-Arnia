const io = require("../../BaseProjectJS/io")
class Contato {
    nome
    sobrenome
    telefone
    email
    constructor (nome, sobrenome, telefone, email){
        this.nome = nome
        this.sobrenome = sobrenome
        this.telefone = telefone
        this.email = email
    }
    adicionarcontato(nome, sobrenome, telefone, email){
        io.write("Escreva o nome do contato")
        this.nome = io.read()
        io.write("Escreva o sobrenome")
        this.sobrenome = io.read()
        io.write("Escreva o telefone")
        this.telefone = io.read()
        io.write("Escreva o email do contato")
        this.email = io.read()
    }
    removercontato(a){
        this.nome.findIndex(function(x){
            x === a ? true : false
        })
        return splice(buscar,1)
    }
    mostrarlista(){
        return nome
    }
    buscarContato(){
        let a = io.read()
        const buscar = this.nome.findIndex(function(x){
            x === a ? true : false
        })
       return console.log(Contato(buscar))
    }
}
const contato1 = new Contato
contato1.adicionarcontato()
const contato2 = new Contato
contato2.adicionarcontato()
let objetos = [contato1, contato2]
io.write("Escreva o nome de quem você quer remover da lista de contatos")
let a = io.read()
objetos.removercontato(a)
io.write("Segue a nova lista de contatos")
io.write("Procure o contato pelo nome: ")