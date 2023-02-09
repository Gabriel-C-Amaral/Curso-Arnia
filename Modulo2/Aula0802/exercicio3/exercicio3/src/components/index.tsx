import React from "react";

type Numeros = {
    num1: number
    num2: number
    add: number | undefined
  }
 type Props = {

 }


  
class Numeross extends React.Component<Props, Numeros> {
     numeros: Numeros = {
        num1: 0,
        num2: 0,
        add: 0
      }    

    render() {
        return <div>                  
        <div className="card">
          <label htmlFor="num1">numero 1</label>
          <input type="number" name="num1" id="num1"  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {this.setState({num1: Number(event.target.value)})}}/>
          <label htmlFor="num2">Numero 2</label>
          <input type="number" name='num2' id='num2'  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {this.setState({num2: Number(event.target.value)})}}/>
          <button onClick={() => {this.setState({add: this.numeros.num1 + this.numeros.num2})}} >
            Somar Valores 
          </button>
          <div>A soma é {this.numeros.add }</div>
          
        </div>
      
    
        </div>
    }
}

export default Numeross