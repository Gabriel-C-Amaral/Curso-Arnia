const personagens = require("./personagens.json")
const episodios = require("./episodios.json")
const io = require("../../BaseProjectJS/io")


/**
 * Para todas as questões abaixo você vai utilizar as duas estruturas personagens e episodios. Ambos são vetores
 * compostos por objetos. Caso queira verificar o conteúdo destes objetos, basta abrir o arquivo em seu vscode.
 *
 * 1 - Escreva um programa que mostre todos os personagens que terminaram vivos na série.
 * 2 - Escreva um programa que mostre somente os apelidos de todos os personagens da série.
 * 3 - Escreva um programa que mostre apenas personagens que são da série Better Call
 * Saul (Para esta utilize a função includes de string)
 * 4 - Escreva um programa que filtre todos os episódios 1 de cada temporada da série Breaking Bad.
 * 5 - Escreva um programa que receba do usuário um número de temporada, um número de episódio e um
 * número para a série (1 - Breaking Bad, 2 - Better Call Saul) e mostre o título daquele episódio ou uma
 * mensagem caso o valor seja inválido.
 * 6 - Escreva um programa que recebe um nome digitado pelo usuário e volte uma lista de episódios que aquele
 * personagem participou ou uma mensagem caso não encontre nenhum. (Utilize a função includes de string e
 * transforme ambos os nomes para lower case)
 */

