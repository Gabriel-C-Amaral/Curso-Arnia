//program
const io = require("../../BaseProjectJS/io")

//Classes
class Contato{
    nome
    sobrenome
    telefone
    email

    constructor(nome, sobrenome, telefone, email){
        this.nome = nome.trim()
        this.sobrenome = sobrenome.trim()
        this.telefone = telefone.trim()
        this.email = email.trim()
    }
}
class Agenda{
    listaDeContatos = []

    constructor(listaDeContatos){
        this.listaDeContatos = listaDeContatos
    }

    getContato(posicao){
        return this.listaDeContatos[posicao]
    }
    addContato(contato){
        let validacao = this.existeOContato(contato.nome, contato.sobrenome)
        if(validacao) console.log("contato existente")
        else this.listaDeContatos.push(contato)        
    }

    removeContato(nome, sobrenome){
        let validacao = this.existeOContato(nome, sobrenome)
        if(validacao){
            for(let i = 0; i<this.listaDeContatos.length; i++){
                if(this.listaDeContatos[i].nome.toLowerCase() === nome.toLowerCase() && this.listaDeContatos[i].sobrenome.toLowerCase() === sobrenome.toLowerCase()){
                    this.listaDeContatos.splice(i,1)
                    console.log("contato removido com sucesso")
                }
            }
        }
        else console.log("contato inexistente")
    }

    exibeContatos(){
        for(let i = 0; i<this.listaDeContatos.length; i++){
            console.log(this.listaDeContatos[i])
        }
    }
    exibeOContato(nome, sobrenome){
        let validacao = this.existeOContato(nome, sobrenome)
        if(validacao){
            for(let i = 0; i<this.listaDeContatos.length; i++){
                if(this.listaDeContatos[i].nome.toLowerCase() === nome.toLowerCase() && this.listaDeContatos[i].sobrenome.toLowerCase() === sobrenome.toLowerCase()){
                    console.log(this.listaDeContatos[i])
                }
            }
        }
        else console.log("O contato não existe")        
    }
    existeOContato(nome, sobrenome){
        let validacao = false
        for(let i = 0; i<this.listaDeContatos.length; i++){
            if(this.listaDeContatos[i].nome.toLowerCase() === nome.toLowerCase() && this.listaDeContatos[i].sobrenome.toLowerCase() === sobrenome.toLowerCase()){
                validacao = true
            }
        }
        return validacao
    }
}

//application-Program
let agenda = new Agenda([])
io.write("Digite dois contatos")
for(let i = 0; i < 2; i++){
    io.write("nome: ")
    nome = io.read()
    io.write("sobrenome")
    sobrenome = io.read()
    io.write("telefone")
    telefone = io.read()
    io.write("email")
    email = io.read()
    agenda.addContato(new Contato(nome, sobrenome, telefone, email))
}

//Remove um Contato
io.write("Digite um contato a ser removido")
io.write("nome: ")
nome = io.read()
io.write("sobrenome")
sobrenome = io.read()
agenda.removeContato(nome, sobrenome)
//Adiciona Contato
io.write("Digite um contato a ser adicionado")
io.write("nome: ")
nome = io.read()
io.write("sobrenome")
sobrenome = io.read()
io.write("telefone")
telefone = io.read()
io.write("email")
email = io.read()
agenda.addContato(new Contato(nome, sobrenome, telefone, email))
//Exibe os contatos
agenda.exibeContatos()
//Mostra um contato
io.write("Digite um contato a ser exibido")
io.write("nome: ")
nome = io.read()
io.write("sobrenome")
sobrenome = io.read()
agenda.exibeOContato(nome, sobrenome)