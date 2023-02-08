import React, { ChangeEvent } from "react";


type State = {
    name: string
    cep: number | undefined
    numero:number | undefined
    complemento: string
    bairro: string
    cidade: string
    estado: string
}

class Formulario extends React.Component<{}, State> {
    state = {
        name: "",
    cep: undefined,
    numero:undefined,
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    }


showInputValue = (event: React.MouseEvent) => {
    event.preventDefault()
    console.log(this.state.name, this.state.bairro, this.state.cep, this.state.cidade, this.state.complemento, this.state.estado, this.state.numero)
}

    render() {
        return (
        <div >
        <label htmlFor="adress">Nome da rua: </label>
        <input type="text" name="adress" id="adress" value={this.state.name} onChange={(event: ChangeEvent<HTMLInputElement>) => this.setState({name: event.target.value})}/>
        <label htmlFor="numero">Numero:</label>
        <input type="number" name="numero" id="numero" value={this.state.numero} onChange={(event: ChangeEvent<HTMLInputElement>) => this.setState({numero: Number(event.target.value)})}/>
        <label htmlFor="cep">CEP:</label>
        <input type="number" name="cep" id="cep" value={this.state.cep} onChange={(event: ChangeEvent<HTMLInputElement>) => this.setState({cep: Number(event.target.value)})}/>
        <label htmlFor="complemento">Complemento</label>
        <input type="text" name="complemento" id="complemento" value={this.state.complemento} onChange={(event: ChangeEvent<HTMLInputElement>) => this.setState({complemento: event.target.value})}/>
        <label htmlFor="bairro">Bairro</label>
        <input type="text" name="bairro" id="bairro" value={this.state.bairro} onChange={(event: ChangeEvent<HTMLInputElement>) => this.setState({bairro: event.target.value})}/>
        <label htmlFor="cidade">Cidade</label>
        <input type="text" name="cidade" id="cidade" value={this.state.cidade} onChange={(event: ChangeEvent<HTMLInputElement>) => this.setState({cidade: event.target.value})}/>
        <label htmlFor="estado">Estado</label>
        <input type="text" name="estado" id="estado" value={this.state.estado} onChange={(event: ChangeEvent<HTMLInputElement>) => this.setState({estado: event.target.value})}/>
        <button onClick={this.showInputValue}> Enviar</button>
      </div>
        )
    }
}



export default Formulario