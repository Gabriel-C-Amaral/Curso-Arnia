/*
  Exercício 3: Com base no exercício anterior, agora crie mais três classes: Banco, Agência e Correntista. Com os atributos:
  Banco: Nome, código, saldo total, lista de agencias
  Agência: Código, lista de contas
  Correntista: Nome e CPF
*/

class AccountHolder {
  constructor (
    private name: string,
    private identity: string
  ) {}
}

class Agency {
  constructor (
    private code: number,
    private accounts: Array<AccountHolder>
  ) {}
}

class Bank {
  constructor (
    private name: string,
    private code: number,
    private amount: number,
    private agencies: Agency[]
  ) {}
}

