const uuid = require("uuid"); // importa a biblioteca 'uuid'

const exampleStudent = {
  code: uuid.v4(), // utiliza a função v4 da biblioteca 'uuid' para gerar um código único
  name: "",
  turma: "401B",
  status: "matriculado",
  document: "123.123.123-00",
  createdAt: "2015-04-12",
};

// crie uma função factory que gera um Student
// Parametros: name, turma, status, document
function makeStudent(name, turma, status, document) {
  const code = uuid.v4(); // gera um código único
  return {
    code,
    name,
    turma,
    status,
    document,
    createdAt: new Date(),
  };
}

class StudentRepository {
  constructor() {
    this.students = [];
  }

  // Cria um novo Student e adiciona ao repositório
  createStudent(name, turma, status, document) {
    const student = makeStudent(name, turma, status, document);
    this.students.push(student);
    return student;
  }

  // Edita um Student existente no repositório
  editStudent(code, data) {
    const index = this.students.findIndex((student) => student.code === code);
    if (index === -1) {
      return null; // retorna null se o Student não for encontrado
    }
    const updatedStudent = { ...this.students[index], ...data };
    this.students[index] = updatedStudent;
    return updatedStudent;
  }

  // Busca um Student por código
  findStudentByCode(code) {
    return this.students.find((student) => student.code === code);
  }

  // Busca todos os Students de uma determinada turma
  findStudentsByTurma(turma) {
    return this.students.filter((student) => student.turma === turma);
  }

  // Deleta um Student do repositório
  deleteStudent(code) {
    const index = this.students.findIndex((student) => student.code === code);
    if (index === -1) {
      return null; // retorna null se o Student não for encontrado
    }
    this.students.splice(index, 1);
  }
}
