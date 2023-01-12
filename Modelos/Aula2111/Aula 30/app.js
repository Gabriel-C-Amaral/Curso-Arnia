const characters = []
let currentPosition = 0

async function getCharacters () {
  characters.push(...(await (await fetch('https://www.breakingbadapi.com/api/characters')).json()))
  loadCharacter(currentPosition)
}

console.log(characters)

function loadCharacter(position) {
  const currentCharacter = characters[position]
  document.getElementById('nome').innerText = currentCharacter.name

  document.getElementById('imagem').src = currentCharacter.img
}