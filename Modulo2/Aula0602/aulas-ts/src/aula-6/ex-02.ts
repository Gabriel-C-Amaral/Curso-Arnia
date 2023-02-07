/*
  Exercício 2: Escreva uma classe que representa uma conta de banco,
  que tenha propriedades como número da conta, nome do correntista e saldo.
  A classe deverá ter métodos para depositar dinheiro, sacar e verificar o saldo da conta.
*/

interface IAccount {
  deposit: (value: number) => boolean
  withdraw: (value: number) => boolean
  verify: () => number
}

class Account implements IAccount {
  constructor (
    private readonly account_number: number,
    private readonly account_name: string,
    private amount: number
  ) { }

  deposit(value: number): boolean {
    if (value <= 0) return false

    this.amount = this.amount + value
    return true
  }

  withdraw(value: number): boolean {
    if (value > 0 && value <= this.verify()) {
      this.amount = this.amount - value
      return true
    }

    return false
  }

  verify (): number {
    return this.amount
  }

  infoAccount () {
    return `
      Número da conta: ${this.account_number}
      Nome do correntista: ${this.account_name}
      Saldo: ${this.verify()}
    `
  }
}

const account = new Account(102030, 'João Pires', 10500)
account.deposit(10000)
account.withdraw(500)

account.deposit(-10000)
account.withdraw(50000)
console.log(account.infoAccount())
