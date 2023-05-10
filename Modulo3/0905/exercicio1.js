const repository = [];

// Crie uma funçao que adiciona um carro(Object) ao repository e retorna o objeto salvado
// Parametros: modelo(string), cor(string), ano(number)
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function createCar(modelo, cor, ano) {
  const car = {
    id: uuidv4(), // utilize uma biblioteca como a 'uuid' para gerar ids únicos
    modelo,
    cor,
    ano,
    createdAt: new Date(),
  };
  repository.push(car);
  return car;
}

// Crie uma funçao que recebe um id por parametro e retorna o objeto referente
// Parametros: id(string)
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function findCarById(id) {
  return repository.find((car) => car.id === id);
}

// Crie uma funçao que retorna todos os carros
// Parametros: id(string)
// Returno(Array): (id(string), modelo(string), cor(string), ano(number), createdAt(Date))[]
function findAllCars() {
  return repository;
}

// Crie uma funçao que atualiza um carro(Object) no repository e retorna o objeto atualizado
// Parametros: id(string), modelo(string), cor(string), ano(number)
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function updateCarById(id, modelo, cor, ano) {
  const carIndex = repository.findIndex((car) => car.id === id);
  if (carIndex === -1) {
    return null; // retorna null se o carro não for encontrado
  }
  const updatedCar = {
    ...repository[carIndex], // mantém todas as propriedades do carro original
    modelo,
    cor,
    ano,
  };
  repository[carIndex] = updatedCar;
  return updatedCar;
}

// Crie uma funçao que remove um carro do repositorio
// Parametros: id(string)
function deleteCarById(id) {
  const carIndex = repository.findIndex((car) => car.id === id);
  if (carIndex === -1) {
    return null; // retorna null se o carro não for encontrado
  }
  repository.splice(carIndex, 1);
}
