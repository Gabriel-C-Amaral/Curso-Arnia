const array = ["a", 1, 2, 3, 4, 5, "a", 6, 7, 8, 9, 10]

// isArray
// Esta função é chamada diretamente da classe Array e retorna true ou false, dependendo se
// o parâmetro passado for um array ou não
Array.isArray(array)

// at
// Esta função retorna o valor do array na posição passada por parâmetro.
// A vantagem é que pode-se utilizar números negativos para acessar o array de trás
// para frente.
let valorPosicao1 = array.at(1) // 2
array[1] // 2
array.at(-1) // Acessa a última posição do array - 10

// forEach
// No forEach devemos passar como parâmetro uma função que será executada uma vez para cada valor
// do array. No exemplo abaixo utilizamos um forEach para descobrir a média dos itens do array.
// Caso queira testar, adicione um console.log(media) na linha 25 e rode o programa.
let sum = 0
array.forEach(function (valor) {
  sum = sum + valor
})
const media = sum / array.length

// map
// A função map retorna um novo array com exatamente o mesmo tamanho do array passado por parâmetro.
// Ela recebe como parâmetro uma função que será executada uma vez para cada valor contido no array,
// e o novo array, que é retornado pela função map, é composto por todos os valores retornados pela
// função declarada dentro do map, em sequência.
// No exemplo abaixo nós aumentamos em 10% o preço de todos os produtos de uma loja. Caso queira
// testar, adicione um console.log(novosPrecos) na linha 37 e rode o programa.
const precos = [120, 200, 450, 300, 45]
let novosPrecos = precos.map(function (preco) {
  return preco + preco * 0.1
})

// filter
// A função filter retorna um novo array, geralmente (mas não necessariamente), menor do que o array
// original. Deve ser passado como parâmetro para a função filter uma função que irá executar uma vez
// para cada membro do array que está sendo filtrado. Esta função deverá sempre retornar true e false,
// sendo que true é uma sinalização para que aquele membro seja incluído no novo array e false uma
// sinalização para que aquele membro não seja incluído no novo array. No exemplo abaixo, nós filtramos
// a mesma lista de preços do exemplo acima, porém agora criando um novo array com os itens que custam
// até 200 reais. Caso queira testar, adicione um console.log(precosFiltrados) na linha 52 e rode o programa.
let precosFiltrados = precos.filter(function (preco) {
  if (preco <= 200) {
    return true
  }
  return false
})

// splice
/**
 * A função splice tem como objetivo primário remover elementos de um array. O primeiro ponto importante
 * é que ela MODIFICA o array, portanto utilize com cuidado. O primeiro parâmetro passado para ela é o índice
 * em que será iniciada a remoção (inclusivo). O segundo parâmetro é o número de elementos que serão removidos.
 * Você pode passar também outros parâmetros, que são elementos que serão inseridos no array a partir da posição
 * especificada no primeiro parâmetro e após a remoção dos elementos que haviam sido marcados para remoção. Para
 * testar, troque o número do segundo parâmetro da função para um número qualquer e faça um console log de array
 * na linha 64.
 */
array.splice(2, 0)

// slice
/**
 * O slice serve para partir um pedaço do array. A função retorna um novo array que é um pedaço do array original.
 * A função recebe dois parâmetros, o primeiro é o índice inicial do primeiro elemento a constar no novo array, e o
 * segundo é o índice final em que o elemento ANTERIOR consta no novo array. Dessa forma, concluimos que o primeiro
 * número é um índice inclusivo e o segundo um índice exclusivo.
 * No exemplo abaixo, nós selecionamos um novo array do original, que começa no índice 2 do array original e termina
 * no 5. (lembre-se, o 6 não é inclusivo.) Para testar, adicione um console.log(partArray) na linha 75.
 */
let partArray = array.slice(2, 6)

// reverse
/**
 * A função reverse inverte a ordem dos itens do array. Para testar, descomente a linha 81 e adicione um console.log(array)
 * na linha 82.
 */
// array.reverse()

// find
/**
 * O find recebe uma função como parâmetro, com os mesmos argumentos das funções que já estudamos acima, e ele retorna
 * o PRIMEIRO elemento do array que satisfaz a condição proposta dentro do escopo da função. Da mesma forma que o filter,
 * a função deve retornar true ou false. Caso não encontre nenhum elemento que satisfaça a condição, é retornado undefined.
 * O exemplo abaixo busca o primeiro elemento do array que possui o valor maior que 4. Para testar, adicione um console.log(numero)
 * na linha 95.
 */
let numero = array.find(function (valor) {
  if (valor === 4) return true
  return false
})

// findIndex
/**
 * O findIndex recebe uma função como parâmetro, com os mesmos argumentos das funções que já estudamos acima, e ele retorna
 * a posição do vetor do PRIMEIRO elemento do array que satisfaz a condição proposta dentro do escopo da função. Da mesma forma
 * que o filter, a função deve retornar true ou false. Caso não encontre nenhum elemento que satisfaça a condição, é retornado
 * undefined. O exemplo abaixo busca o primeiro elemento do array que possui o valor maior que 4. Para testar, adicione um
 * console.log(indice) na linha 108.
 */
let indice = array.findIndex(function (valor) {
  if (valor === 4) return true
  return false
})

// every
/**
 * O every recebe uma função como parâmetro, com os mesmos argumentos das funções que já estudamos acima, e retorna true ou
 * false. Ele retornará verdadeiro caso TODOS os elementos de um vetor obedeçam a uma condição proposta. E retornará false
 * caso pelo menos um não retorne verdadeiro. No exemplo abaixo verificamos se todos os números do array são números. A função
 * só retornará verdadeiro caso TODOS sejam números. Para testar adicione um console.log(ehVetorDeNumero) na linha 120.
 */
let ehVetorDeNumero = array.every(function (valor) {
  if (typeof valor === "number") return true
  return false
})

// some
/**
 * O some recebe uma função como parâmetro, com os mesmos argumentos das funções que já estudamos acima, e retorna true ou
 * false. Ele retornará verdadeiro caso ALGUM elemento de um vetor obedeça a uma condição proposta. E retornará false
 * caso NENHUM retorne verdadeiro. No exemplo abaixo verificamos se pelo menos um dos números do array é um número.
 * A função só retornará verdadeiro caso algum seja um número. Para testar adicione um console.log(temAlgumNumero) na
 * linha 133.
 */
let temAlgumNumero = array.some(function (valor) {
  if (typeof valor === "number") return true
  return false
})

// reduce
/**
 * O reduce tem o objetivo de transformar um array. Esta transformação pode ser para um novo array, para um número, uma string,
 * um objeto, depende do desenvolvedor. O primeiro parametro que ele recebe é uma função, que é diferente das outras que estudamos,
 * essa função recebe como parâmetros um valor acumulado e um valor atual (e pode receber a posição atual do vetor). O segundo
 * parâmetro é o valor inicial do seu resultado final, a variável que representa o valorAcumulado vai ser preenchida com o valor
 * colocado neste segundo parâmetro a primeira vez que for executado o reduce. O reduce executa a função do primeiro parâmetro para
 * cada item do vetor, e o retorno da função é atribuído à variável que representa o valor acumulado. De forma que no final,
 * este valor acumulado é o resultado final do seu reduce. No exemplo abaixo, escrevemos uma função que soma todos os itens de
 * um vetor, mas somente quando estes valores são numéricos. Quando o valor é uma string, ele somente retorna o valor acumulado
 * para que ele continue no valor calculado anteriormente. Para testar, adicione um console.log(soma) na linha 150.
 */
let soma = array.reduce(function (valorAcumulado, valorAtual) {
  if (typeof valorAtual === "string") return valorAcumulado
  return valorAcumulado + valorAtual
}, 0)
