class Base {
  protected k = 5

  constructor(k?: number) {
    this.k = k ?? 5
  }
}

class Polygon extends Base {
  protected _numberOfSides: number
  sideSize = 1

  constructor(numberOfSides = 3, sideSize = 1) {
    super()
    this._numberOfSides = Number(numberOfSides)
    this.sideSize = sideSize
  }

  calculatePerimeter() {
    return this.numberOfSides * this.sideSize
  }

  get numberOfSides() {
    return this._numberOfSides
  }

  set numberOfSides(value) {
    this._numberOfSides = value
  }
}

const square = new Polygon(3, 10)
// Errado
// square.numberOfSides = "10"
// Certo
square.numberOfSides = 10

console.log(square instanceof Polygon)

function getObject(objeto: Polygon | Date) {
  if (objeto instanceof Polygon) {
    objeto
  }
}

const date1 = "1990-01-01"
const date2 = "1994-04-05"

const biggerDate = new Date(date1) > new Date(date2) ? date1 : date2
