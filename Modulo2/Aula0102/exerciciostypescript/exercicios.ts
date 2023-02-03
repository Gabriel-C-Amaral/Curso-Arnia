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


//Exercício 7: Escreva uma função que recebe um array de strings e retorna um novo array removendo as duplicatas.

type Strings = Array<string>

function ex7 (arr: Strings): Strings {
    return arr.filter((item, index) => {
        if (arr.indexOf(item) === index) {
            return true
        } return false
    })
}

const arrayStrings = ['maçã', 'jaca', 'abacaxi', 'jaboticaba', 'jaca', 'abacaxi']


// Exercício 8: Escreva uma função que recebe uma string e retorna o número de vogais dela, utilize Typescript para garantir que o input seja uma string e o retorno da função seja numérico.
const vogais = ['a', 'e', 'i', 'o', 'u']
const strrr = 'o homem macaco não tem alma nem coração'

function ex8 (arr:string): number {
    const strArray = strrr.split('')
    let respond = strArray.map(element => {
        if (vogais.includes(element)) {
            return true
        } return false
    });

 return respond.length
}

//AULA 6

//Exercício 1: Escreva uma classe em typescript que implementa uma interface para executar operações aritméticas básicas (adição, subtração, divisão, multiplicação)
type OperationType = (a:number, b: number) => number

// interface IOperations {
//     add: OperationType
//     sub: OperationType
//     div: OperationType
//     mult: OperationType
// }

class Operations {
    add (a:number, b: number): number {
        return a + b
    }
    sub (a:number, b: number): number {
        return a - b
    }
    div (a:number, b: number): number {
        return a / b
    }
    mult (a:number, b: number): number {
        return a * b
    }
}