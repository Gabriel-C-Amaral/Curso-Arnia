/** Utility Types */

type Todo = {
  title: string
  description: string
}

const todoItem: Partial<Todo> = {
  title: "Do the dishes",
}

function getTodo(description: string) {
  console.log(description)
}

getTodo(todoItem.title ?? "")

const description = todoItem.description ?? ""

type Column = { value: string; identifier: string }
const columns: Readonly<Column[]> = [
  {
    value: "Id",
    identifier: "id",
  },
  {
    value: "Nome completo",
    identifier: "name",
  },
  {
    value: "Último acesso",
    identifier: "last_access",
  },
]

type ColumnsNames = "id" | "name" | "last_access"

const columns2: Record<ColumnsNames, Column> = {
  last_access: {
    value: "Último acesso",
    identifier: "last_access",
  },
  id: {
    value: "Id",
    identifier: "id",
  },
  name: {
    value: "Nome completo",
    identifier: "name",
  },
}

const objectExample: Record<string, string> = {
  teste: "teste",
  teste2: "teste2",
}

type Client = {
  name: string
  cpf: string
}

type ClientKinds = "client" | "participant" | "conjuge"

const clientPayload: Record<ClientKinds, Client> = {
  client: {
    name: "Alberto",
    cpf: "12345677889",
  },
  participant: {
    name: "Almyr",
    cpf: "1231445123412",
  },
  conjuge: {
    name: "Teste",
    cpf: "123123123",
  },
}

interface Todo2 {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Pick<Todo2, "title" | "completed">

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
}

/** Tipos genéricos */

function identity(arg: any): any {
  return arg
}

const aux = 5
const auxIdentity = identity(aux)

function identityGeneric<Type>(arg: Type): Type {
  return arg
}

let aux2 = "a"
let aux3 = 5
const auxidentity2 = identityGeneric<string>(aux2)
const auxIdentity3 = identityGeneric(aux3)
const auxIdentity4 = identityGeneric<Todo>({ title: "a", description: "b" })

