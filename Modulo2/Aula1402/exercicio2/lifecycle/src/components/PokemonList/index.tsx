import React from "react"

type PokemonAPI = {
  name: string
  url: string
}

type State = {
  list: Array<PokemonAPI>
}

class PokemonList extends React.Component<{}, State> {
  state = {
    list: [] as PokemonAPI[],
  }

  componentDidMount() {
    setTimeout(async () => {
      const response = await (
        await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      ).json()
      this.setState({ list: response.results })
    }, 5000)
  }

  render() {
    return (
      <div>
        {this.state.list.length ? (
          <ol>
            {this.state.list.map((pokemon) => (
              <li>
                {pokemon.name} -
                <a target="_blank" href={pokemon.url}>
                  link
                </a>
              </li>
            ))}
          </ol>
        ) : (
          <p>Lista não carregada!</p>
        )}
      </div>
    )
  }
}

export default PokemonList
