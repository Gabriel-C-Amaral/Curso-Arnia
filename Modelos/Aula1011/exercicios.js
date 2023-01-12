/**
 * 1 - Crie uma classe chamada Invoice que possa ser utilizado por uma loja de suprimentos
 * de informática para representar uma fatura de um item vendido na loja. Uma fatura deve incluir
 * as seguintes informações como atributos:
 *  - o número do item faturado,
 *  - a descrição do item,
 *  - a quantidade comprada do item e
 *  - o preço unitário do item.
 * Sua classe deve ter um construtor que inicialize os quatro atributos. Se a quantidade não for
 * positiva, ela deve ser configurada como 0. Se o preço por item não for positivo ele deve ser
 * configurado como 0.0. Além disso, forneça um método chamado getInvoiceAmount que calcula o valor
 * da fatura (isso é, multiplica a quantidade pelo preço por item) e depois retorna o valor.
 * Escreva um aplicativo de teste que demonstra as capacidades da classe Invoice
 */
class invoice {
    num
    descricao
    quantidade
    preco

    constructor (num, descricao, quantidade, preco){
        this.num = num
        this.descricao = descricao
        this.quantidade = quantidade
        this.preco = preco
    }
    negativo(){
        if (quantidade < 0) {
            this.quantidade = 0
        }
    }
}

/**
 * 2 - A fim de representar empregados em uma firma, crie uma classe chamada Empregado que inclui as três
 * informações a seguir como atributos:
 *  - um primeiro nome,
 *  - um sobrenome, e
 *  - um salário mensal.
 * Sua classe deve ter um construtor que inicializa os três atributos. Se o salário mensal não for positivo,
 * configure-o como 0. Escreva dois métodos para a classe, um método que retorna o salário anual do empregado
 * e outro que fornece um aumento de salário para o empregado. Escreva um aplicativo de teste que demonstra
 * as capacidades da classe. Crie duas instâncias da classe e exiba o salário anual de cada instância.
 * Então dê a cada empregado um aumento de 10% e exiba novamente o salário anual de cada empregado.
 */

/**
 * 3 - Crie uma classe para representar datas.
 * 3.1 - Represente uma data usando três atributos: o dia, o mês, e o ano.
 * 3.2 - Sua classe deve ter um construtor que inicializa os três atributos e verifica a validade dos valores
 *   fornecidos (dia só pode ir até 31 e mês até 12 e os valores não podem ser negativos, caso algum valor seja
 *   inválido, inicialize os atributos com o padrão 01/01/1900).
 * 3.3 - Forneça o método toString para retornar uma representação da ata como string. Considere que a
 *   data deve ser formatada mostrando o dia, o mês e o ano separados por barra (/).
 * 3.4 - Forneça uma operação para avançar uma data para o dia seguinte. (Atente-se para as viradas de mês e ano)
 * 3.5 - Escreva um aplicativo de teste que demonstra as capacidades da classe.
 */

/**
 * 4 - Faça um programa para representar um sistema de cadastro de funcionários de uma empresa.
 * A classe Empregado deve possuir dois atributos, nome e salario.
 * A classe Gerente deve herdar da classe Empregado. Além dos atributos do Empregado, ele também possui
 * o atributo departamento, que é uma string que diz onde ele chefia.
 * A classe Vendedor deve também herdar da classe Empregado. O vendedor possui um percentual de comissão.
 * Você deverá criar um método para calcular o salário do vendedor, sendo que o cálculo deste salário deverá
 * receber o número de vendas realizadas e retornar o salário acrescido da comissão.
 */
