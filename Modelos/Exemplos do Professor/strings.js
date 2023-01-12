const text = "The quick brown fox jumps over the lazy dog"

// at
/*
 * Assim como nas funções de vetor, o at retorna o elemento que está na posição colocada
 * como parâmetro. Quando utilizado números negativos, o vetor é contado de trás para frente.
 */
console.log(text.at(-1))

// concat
/**
 * O concat realiza a concatenação da string que está chamando a função com todos os
 * parâmetros passados. A função concat pode receber n parâmetros, que serão concatenados
 * em ordem.
 */
const text2 = "Teste teste"
const novaString = text.concat(" ", text2)
console.log(novaString)

// endsWith
/**
 * O endsWith realiza uma checagem ao final da string para verificar se o valor passado no
 * primeiro parâmetro é igual ao fim da string. O segundo parâmetro é opcional e serve para
 * limitar o número de posições em que é feita a checagem. Existe também a função startsWith
 * que possui o mesmo comportamento, porém verifica o início. Esta função sempre retorna true
 * ou false.
 */
console.log(text.endsWith("k", 9))

// includes
/**
 * Esta função verifica se o dado texto está contido na string, retornando true ou false. O
 * segundo parâmetro é opcional e serve como referência de qual posição da string a busca
 * será iniciada. O 0 é um valor padrão para o argumento e na função abaixo está propositalmente
 * redundante.
 */
console.log(text.includes("The", 0))

// replace
/**
 * A função replace procura o valor que está no primeiro argumento e troca pelo valor colocado
 * no segundo. Caso a busca seja por uma expressão regular com o parâmetro g, o replace trocará
 * todas as ocorrências. Caso a busca seja por uma outra string, ele trocará somente a primeira
 * ocorrência. Caso deseje trocar todas as ocorrências, utilize a função replaceAll.
 * Esta função retorna uma nova string, não modifica a string original.
 */
console.log(text.replace(/[A-Z]+/g, "a"))
console.log(text.replaceAll("o", "a"))

// slice
/**
 * Slice e substring recebem dois parâmetros, um critério de entrada (incluso) e um critério de
 * final (não incluso) e retornam uma nova string contendo o pedaço da string original que se
 * encontra neste intervalo.
 */
console.log(text.slice(4, 19))

// substring
console.log(text.substring(4, 19))

// split
/**
 * Split serve para transformar uma string em um vetor. O valor passado como parâmetro da função
 * é o caractere que será usado como separador daquela string. Passando por exemplo um espaço
 * igual na função abaixo, você irá separar uma string em palavras. Caso você passe uma string
 * vazia, ele separará cada caractere em uma posição.
 */
const nome = "Alberto Timóteo"
const nomePartido = nome.split(" ")
console.log(nomePartido.length < 2 ? "Nome incompleto" : "Nome completo")

// toLowerCase
/**
 * toLowerCase e toUpperCase possuem funcionamento parecido. O primeiro retorna uma nova string
 * com todas as letras em minúsculos e o segundo retorna uma nova string com todas as letras
 * em maiúsculos. É um recurso útil quando se está fazendo comparação entre valores. Dê uma
 * olhada no exemplo abaixo.
 */
const produtos = ["detergente", "agua sanitaria", "sabonete"]
const pesquisa = "DeteRgEnte"
const produtosFiltrados = produtos.filter(function (value) {
  if (value.toLowerCase() === pesquisa.toLowerCase()) return true
  return false
})
console.log(produtosFiltrados)

// toUpperCase
console.log(text.toUpperCase())

// template string
function escreveTexto(texto) {
  return texto
}

const string1 = text + ", " + '"Teste"'
const string2 = "Teste"
const string3 = `${text}, ${escreveTexto("Alguma coisa")}`
console.log(string3)
