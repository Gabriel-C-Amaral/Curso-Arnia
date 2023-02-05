const convertPrice = number => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(number)
}

export default function Product ({ game, checked, onClick }) {
  return (
    <div
      className="product"
      // adicionando ou removendo um jogo no carrinho com objeto
      // onClick={() => this.toggleCart(game)}
      // adicionando ou removendo um jogo no carrinho com array
      onClick={() => onClick(game)}
    >
      <div className="image">
        <img src={game.image} alt={game.title} />
      </div>

      <div className="info">
        {/* Check USANDO OBJETO */}
        {/* <div className={this.state.cart.hasOwnProperty(game.id) ? 'checkbox selected' : 'checkbox'} /> */}
        
        {/* Check USANDO ARRAY */}
        <div className={checked ? 'checkbox selected' : 'checkbox'} />
        <div className="price">Valor: {convertPrice(game.price)}</div>
      </div>
    </div>
  )
}