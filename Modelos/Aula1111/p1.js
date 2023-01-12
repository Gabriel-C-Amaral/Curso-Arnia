const io = require("../../BaseProjectJS/io")
class Contatos{
    nome
    sobrenome
    telefone
    email

    constructor(nome, sobrenome, telefone, email){
        this.nome = nome
        this.sobrenome = sobrenome
        this.telefone = telefone
        this.email = email
    }
}
class Lista{
    listaa = []

    constructor(listaa){
        this.listaa = listaa
    }
    addcont(nome, sobrenome, telefone, email){
        let lis = []
        for (let index = 0; index < 2; index++) {
            io.write("Escreva o nome: ") 
            nome = io.read()
            io.write("Escreva o sobrenome: ") 
            sobrenome = io.read()
            io.write("Escreva o telefone: ") 
            telefone = io.read()
            io.write("Escreva o email: ") 
            email = io.read()
            lis[index] = new Contatos(nome, sobrenome, telefone, email)
        }
        this.listaa = lis
        return lis
    }
    removeContato(nome){
            for(let i = 0; i<2; i++){
                if(this.listaa[i].nome.toLowerCase() === nome.toLowerCase() ){
                    this.listaa.splice(i,1)
                    console.log("contato removido com sucesso")
                }
            }
            return this.listaa
    }
 
}
io.write("Escreva 2 contatos")
let a = new Lista
let aa = a.addcont()
io.write(aa)
io.write("Digite o nome e sobrenome de quem você quer tirar da lista")
nome = io.read()
let vv = aa.removeContato(nome)
io.write(vv)