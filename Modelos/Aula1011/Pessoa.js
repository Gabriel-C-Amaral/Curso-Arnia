class Pessoa {
  nome
  dataNascimento
  cpf

  constructor(nome, dataNascimento, cpf) {
    this.nome = nome
    this.dataNascimento = dataNascimento
    this.cpf = cpf
  }

  calcularIdade() {
    const hoje = new Date()
    const idade = hoje.getFullYear() - this.dataNascimento.getFullYear()
    return idade
  }
}

class Aluno extends Pessoa {
  matricula
  turma
}

class Professor extends Pessoa {
  valorHora
  turmas = []

  constructor(nome, dataNascimento, cpf, valorHora, turmas) {
    super(nome, dataNascimento, cpf)
    this.valorHora = valorHora
    this.turmas = turmas
  }

  confereTurma(turma) {
    if (this.turmas.includes(turma)) {
      return "O professor leciona nesta turma."
    }
    return "O professor não leciona nesta turma."
  }
}

const pessoa = new Pessoa(
  "Alberto",
  new Date("1994-04-05T00:00:00"),
  "11111111111"
)

const idade = pessoa.calcularIdade()
// console.log("A idade é ", idade)

const professor = new Professor(
  "Alberto",
  new Date("1994-04-05T00:00:00"),
  "11111111111",
  58,
  ["3-2022", "2-2022"]
)

const leciona1 = professor.confereTurma("3-2022")
const leciona2 = professor.confereTurma("4-2022")
console.log(leciona1, leciona2)
