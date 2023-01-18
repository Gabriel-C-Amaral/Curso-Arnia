function App() {
  const randomNumber = Math.random()

  return (
    <div className="App">
      <h1>Testando</h1>
      {randomNumber > (0.5) ? <p>maior</p> : <p>menor</p>} 
    </div>
  )
}

export default App
