import React from "react";

type State = {
  cep: number | undefined;
  num?: number | undefined;
  rua: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
};

type ResponseApi = {
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
};

class CepForm extends React.Component<{}, State> {
  state = {
    cep: undefined,
    num: undefined,
    rua: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  };

  async FetchAdress(): Promise<ResponseApi> {
    const apiResponse = await fetch(
      `http://viacep.com.br/ws/${this.state.cep}/json/`
    );
    const adress = await apiResponse.json();

    this.setState({
      rua: adress.logradouro,
      bairro: adress.bairro,
      cidade: adress.localidade,
      estado: adress.uf,
    });

    return adress;
  }

  render() {
    return (
      <div className="cepform">
        <label htmlFor="cep">CEP:</label>
        <input
          onBlur={() => this.FetchAdress()}
          value={this.state.cep}
          onChange={(event) => {
            this.setState({ cep: Number(event.target.value) });
          }}
          type="number"
          name="cep"
          id="cep"
        />
        <button>Procurar pelo CEP</button>
        <label htmlFor="rua">Nome da rua</label>
        <input value={this.state.rua} type="text" name="rua" id="rua" />
        <label htmlFor="num">Número:</label>
        <input value={this.state.num} type="number" name="num" id="num" />
        <label htmlFor="complemento">complemento</label>
        <input
          value={this.state.complemento}
          type="text"
          name="complemento"
          id="complemento"
        />
        <label htmlFor="bairro"> Bairro</label>
        <input
          value={this.state.bairro}
          type="text"
          id="bairro"
          name="bairro"
        />
        <label htmlFor="cidade">cidade</label>
        <input
          value={this.state.cidade}
          type="text"
          id="cidade"
          name="cidade"
        />
        <label htmlFor="estado">Estado</label>
        <input
          value={this.state.estado}
          type="text"
          id="estado"
          name="estado"
        />

        <p>{this.state.cep}</p>
      </div>
    );
  }
}

export default CepForm;
