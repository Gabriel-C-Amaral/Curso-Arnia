/*
  Exercício 4: Crie um método na classe Banco para calcular o saldo total do banco. Crie antes um método na classe Agência para calcular o saldo total da agência. Você deverá utilizar o saldo de todas as agências para calcular o saldo do banco.
*/

class AccountHolder {
  constructor (
    private name: string,
    private identity: string,
    private _amount: number
  ) {}

  get amount () {
    return this._amount
  }
}

class Agency {
  constructor (
    private code: number,
    private accounts: Array<AccountHolder>
  ) {}

  calcTotalAmount (): number {
    return this.accounts.reduce((valorInicial, account) => {
      return valorInicial + account.amount
    }, 0)
  }
}

class Bank {
  constructor (
    private name: string,
    private code: number,
    private totalAmount: number,
    private agencies: Agency[]
  ) {}

  calcTotalAmount (): number {
    return this.agencies.reduce((valorInicial, agency) => {
      return valorInicial + agency.calcTotalAmount()
    }, 0)
  }
}


const correntista1 = new AccountHolder('Hagno', '01234', 10000)
const correntista2 = new AccountHolder('Cesar', '12345', 10000)
const correntista3 = new AccountHolder('Jessie', '23456', 20000)

const agencia1 = new Agency(100, [
  correntista1,
  correntista2
])

const agencia2 = new Agency(200, [
  correntista3
])

const banco = new Bank('CesarBank', 102, 0, [
  agencia1,
  agencia2
])

console.log('BANCO DO CESAR', banco.calcTotalAmount())
