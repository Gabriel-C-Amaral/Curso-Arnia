import React from "react";

type Numeros = {
    num1: number | undefined
    num2: number | undefined
  }


  
class Numeross extends React.Component {
     numeros: Numeros = {
        num1: undefined,
        num2: undefined
      }

    

    render() {
        return <div>           
     (
      <div className="App">
        
        <h1>Vite + React</h1>
        <div className="card">
          <label htmlFor="num1">numero 1</label>
          <input type="number" name="num1" id="num1" value={this.numeros.num1} onChange={this.setState()} />
          <label htmlFor="num2">Numero 2</label>
          <input type="number" name='num2' id='num2' value={this.numeros.num2} />
          <button onClick={this.setState(this.numeros.num1 + this.numeros.num2)}>
            count is 
          </button>
          
        </div>
      
      </div>
    )
        </div>
    }
}