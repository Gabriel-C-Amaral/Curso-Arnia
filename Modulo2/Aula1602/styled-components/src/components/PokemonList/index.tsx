import React from "react"

import { Container, Input, Title } from "./styles"

type PokemonAPI = {
  name: string
  url: string
}

type State = {
  list: Array<PokemonAPI>
  isFontSmall: boolean
}

class PokemonList extends React.Component<{}, State> {
  state = {
    list: [] as PokemonAPI[],
    isFontSmall: false,
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
      <Container>
        <Title size={this.state.isFontSmall ? "SMALL" : "LARGE"}>
          Lista de Pokemon
        </Title>
        <label htmlFor="title">Tamanho Pequeno</label>
        <input
          type="checkbox"
          id="title"
          checked={this.state.isFontSmall}
          onChange={(event) =>
            this.setState({ isFontSmall: event.target.checked })
          }
        />
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
      </Container>
    )
  }
}

export default PokemonList
