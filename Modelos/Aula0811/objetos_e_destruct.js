const personagens = require("./personagens.json")

/**
 * Este é um objeto Javascript. Um objeto é sempre declarado a partir
 * da abertura de chaves. O objeto javascript funciona com a lógica de
 * pares chave-valor. Toda propriedade que você possa declarar em um
 * objeto deve ser definida a ela uma chave, que representa o nome
 * daquela propriedade, e utilizando : você insere o valor. O valor
 * pode ser qualquer tipo de variável javascript, então você pode colocar
 * tipos básicos como string, número, boolean, e objetos complexos como
 * vetores, outros objetos e funções.
 */
const pessoa = {
  nome: "Alberto",
  idade: 28,
  ehSexoMasculino: true,
  formacao: "Ensino superior completo",
  veiculos: ["carro", "moto"],
  conjuge: {
    nome: "Raquel",
    idade: 32,
  },
  dinheiro: 1000,
  gastarDinheiro: function (valor) {
    this.dinheiro = this.dinheiro - valor
  },
}
/**
 * Para acessar uma propriedade de um objeto devemos utilizar o .
 * Digitamos o nome_do_objeto.nome_da_propriedade. No exemplo abaixo
 * fazemos o log do nome da pessoa, depois executamos a função gastar
 * dinheiro com o valor 100 e depois fazemos um log da quantidade de
 * dinheiro desta pessoa.
 */
console.log(pessoa.nome)
pessoa.gastarDinheiro(100)
console.log(pessoa.dinheiro)

// JSON
// JavaScript Object Notation
/**
 * O JSON é um objeto muito parecido com o objeto javascript, mas
 * que é um pouco mais simples que ele. O JSON necessariamente precisa
 * que todas as suas chaves sejam strings, ou seja, estejam envolvidas
 * por aspas. Ele não aceita trailing comma (virgula ao final), e o mais
 * importante, ele só aceita os tipos básicos string, number, boolean e null.
 * Além dos tipos complexos vetor e objeto que são formados também por
 * estes tipos básicos. Veja exemplos de jsons em personagens.json, pessoa.json
 * e post.json.
 */

/**
 * Quero filtrar o vetor de personagens para trazer somente
 * os personagens que participaram das 5 temporadas da série
 * Breaking Bad e depois transformar este array em um array
 * somente de nomes dos personagens.
 */
const personagensTodasTemporadas = personagens.filter(function (personagem) {
  return personagem.appearance.length === 5
})

const somenteNomes = personagensTodasTemporadas.map(function (personagem) {
  return personagem.name
})
console.log(somenteNomes)

// destruct de objeto
/**
 * O destruct de objeto serve para você isolar uma propriedade
 * específica de um objeto fazendo uma igualdade do nome da propriedade
 * entre chaves a um objeto que possua aquela propriedade. Veja no exemplo
 * abaixo o destruct das propriedades name, appearance e birthday. Veja
 * também que a propriedade birthday foi renomeada para dataAniversario utilizando
 * a notação do nome_propriedade: propriedadeRenomeada.
 */
const walter = personagensTodasTemporadas[0]
const { name, appearance, birthday: dataAniversario } = walter
console.log(name, appearance, dataAniversario)
// destruct de objeto dentro de objeto
const {
  conjuge: { nome },
} = pessoa
console.log(nome) // Raquel

//destruct de array
/**
 * O destruct de array funciona um pouco parecido com o de objeto.
 * Nele, você também isola uma determinada posição de um array dentro
 * de uma nova variável, nomeada por você. Para pular posições, você deve
 * colocar somente as vírgulas sem nomear variáveis.
 */
const [walter2, jesse] = personagensTodasTemporadas
console.log(walter2, jesse)
const [, , , waltjr] = personagensTodasTemporadas
console.log(waltjr)

/**
 * Pegar do array de personagens todos os personagens que participaram
 * da primeira temporada.
 */
const personagensPrimeiraTemporada = personagens.filter(function (personagem) {
  const [temporada] = personagem.appearance
  return temporada === 1
})
console.log(personagensPrimeiraTemporada)

/**
 * Pegar do array de personagens a profissão principal de todos
 * os personagens
 */
const profissaoPersonagens = personagens.map(function (personagem) {
  const [profissao] = personagem.occupation
  return profissao
})
console.log(profissaoPersonagens)
