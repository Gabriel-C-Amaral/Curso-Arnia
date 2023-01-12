class Animal {
  especie
  habitat
  porte

  constructor(especie, habitat, porte) {
    this.especie = especie
    this.habitat = habitat
    this.porte = porte
  }
}

class Passaro extends Animal {
  asas

  constructor(especie, habitat, porte) {
    super(especie, habitat, porte)
    this.asas = "parada"
  }

  voar() {
    if (this.especie === "galinha" || this.especie === "pinguim") {
      return false
    }
    this.asas = "bater"
  }
}

class Peixe extends Animal {
  guelras
  nadadeiras

  nadar() {}
}

const galinha = new Passaro("galinha", "urbano", "pequeno")
