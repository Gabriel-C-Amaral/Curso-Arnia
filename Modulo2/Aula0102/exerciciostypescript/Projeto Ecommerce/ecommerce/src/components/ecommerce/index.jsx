import React from 'react'
import catalog from '../../assets/db'
import './style.css'
import Product from '../product'
import Title from '../title'
import Header from '../header'

const SCREEN = {
  HOME: 'home',
  CART: 'cart',
  CHECKOUT: 'checkout'
}

export default class Ecommerce extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      cart: {},
      cartArray: [],
      screen: SCREEN.HOME
    }

    this.addCart = this.addCart.bind(this)
    this.removeCart = this.removeCart.bind(this)
    this.toggleCart = this.toggleCart.bind(this)

    this.toggleCartArray = this.toggleCartArray.bind(this)
  }

  addCart (game) {
    this.setState({
      cart: {
        ...this.state.cart,
        [game.id]: game
      }
    })
  }

  removeCart (game) {
    const cart = { ...this.state.cart }
    Reflect.deleteProperty(cart, game.id) // remove
    // delete cart[game.id] // outra opção de remover

    this.setState({
      cart
    })
  }

  toggleCart (game) {
    // if (this.state.cart.hasOwnProperty(game.id))
    if (game.id in this.state.cart) {
      this.removeCart(game)
      return
    }

    this.addCart(game)
  }

  toggleCartArray (game) {
    // verificar se existe
    // if (this.state.cartArray.some(item => item.id === game.id)) {}

    if (this.state.cartArray.includes(game)) {
      //remove
      this.setState({
        cartArray: this.state.cartArray.filter(item => item.id !== game.id)
      })
      return
    }

    // add
    this.setState({
      cartArray: [...this.state.cartArray, game]
    })
  }

  render () {
    return (
      <div className='catalog'>

        <Header title="Loja Virtual" />

        {this.state.screen === SCREEN.HOME && (
          <main>
            <Title title="Produto" quantity={this.state.cartArray.length} />

            <div className="grid">
              {catalog.map(game => (
                <Product
                  key={`game-${game.id}`}
                  onClick={this.toggleCartArray}
                  game={game}
                  checked={this.state.cartArray.includes(game)}
                />
              ))}
            </div>
    
            <div className="button-footer">
              <button
                className="btn"
                onClick={() => this.setState({
                  screen: SCREEN.CART
                })}
              >Ir para o carrinho.</button>
            </div>
    
          </main>
        )}
        
        {this.state.screen === SCREEN.CART && (
          <main>
            <Title title="Carrinho" quantity={this.state.cartArray.length} />

            <div className="grid">
              {this.state.cartArray.map(item => (
                <Product
                key={`cart-${item.id}`}
                onClick={this.toggleCartArray}
                game={item}
                checked={this.state.cartArray.includes(item)}
              />
              ))}
            </div>

            <div className="button-footer">
              <button
                className="btn"
                onClick={() => this.setState({
                  screen: SCREEN.HOME
                })}
              >Voltar para produtos</button>
            </div>
          </main>
        )}
  
        <footer>
          RODAPE ainda a ser feito
        </footer>
  
  
      </div>
    )
  }
}
