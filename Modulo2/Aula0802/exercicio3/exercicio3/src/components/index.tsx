import React from "react";

type Numeros = {
    num1: number | undefined
    num2: number | undefined
  }

type Props = {

}


  
class Numeross extends React.Component<Numeros, Props> {
     numeros: Numeros = {
        num1: 0,
        num2: 0
      }

    

    render() {
        return <div>           
     (
        
        <div className="card">
          <label htmlFor="num1">numero 1</label>
          <input type="number" name="num1" id="num1" value={this.numeros.num1} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {this.setState({num1: Number(event.target.value)})}}/>
          <label htmlFor="num2">Numero 2</label>
          <input type="number" name='num2' id='num2' value={this.numeros.num2} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {this.setState({num2: Number(event.target.value)})}}/>
          <button >
            Somar Valores 
          </button>
          <div>A soma é {Number(this.numeros.num1) + Number(this.numeros.num2) }</div>
          
        </div>
      
    )
        </div>
    }
}

export default Numeross