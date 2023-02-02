type ArgsProps = string | number

function exercicio4 (arg: ArgsProps): number {
    if (typeof arg === 'string') {
     return   arg.length
    } else {

    return arg }   
}

// Exercício 5: Crie uma função que receba um union type de boolean e string e  retorne as strings “True” ou “False” se o tipo recebido for boolean, ou “Input is not boolean” caso seja uma string.

type IsBoolean = boolean | string

function seraboolean (arg: IsBoolean): string {
    if (typeof arg === "boolean") {
        if (arg === true) {
            return 'true'
        } else {
            return 'false'
        }
    } else {
        return 'Input is not boolean'
    }
}
console.log(seraboolean(true))

// Exercício 6: Crie uma função que recebe um union type de array de strings e números e retorna um novo array contendo apenas as strings. Caso não tenha nenhuma string, deverá retornar um array vazio.

type StringOrNumber = string | number
type UnionArrays = StringOrNumber[]
type ArrayString = string[]

function onlyStrings (arg: UnionArrays): ArrayString {
   const argStrings: ArrayString = []

   arg.forEach(item => {
    if (typeof item === 'string') {
        arg.push(item)
    }
   })
   return argStrings
}