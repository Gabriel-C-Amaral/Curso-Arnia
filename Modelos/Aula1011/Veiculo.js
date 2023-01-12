// Nome de classe sempre com letra maiúscula
class Veiculo {
  /**
   * Atributos
   */
  rodas
  marca
  placa
  material
  cor
  tipoCombustivel

  constructor() {
    this.motor = "DESLIGADO"
  }

  /**
   * Métodos
   */
  liga() {
    this.motor = "LIGADO"
  }
  desliga() {
    this.motor = "DESLIGADO"
  }
  acelera() {}
  freia() {}
}

const uno = new Veiculo()
uno.rodas = 4
uno.marca = "FIAT"
uno.placa = "XFR-4321"
uno.material = "Nokia"
uno.cor = "prata"
uno.tipoCombustivel = ["gasolina", "alcool"]
console.log(uno.motor)
uno.liga()
console.log(uno.motor)
