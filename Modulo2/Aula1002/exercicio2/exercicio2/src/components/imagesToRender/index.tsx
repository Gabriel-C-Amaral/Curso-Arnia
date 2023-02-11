import React from "react";


type img = {
    url: string[]
    position: number
}

class ImgToRender extends React.Component<{}, img> {
    state = {
        url: ["https://static.wikia.nocookie.net/dublagempedia/images/2/20/Pica_pau.jpg/revision/latest?cb=20180501163512&path-prefix=pt-br", "https://portalguara.com/wp-content/uploads/2022/02/pica-pau-3.jpg", "https://www.jornalcruzeiro.com.br/_midias/jpg/2021/10/01/pica_pau_que_inspirou_2-775188.jpg"],
        position: 0

    }
    next = () => {
        this.setState((state) =>{

        return {position: state.position + 1}})
    }
    previous = () => {
        this.setState((state) => {
            return {position: state.position - 1}
        })
    }

    render() {
        return <div><img width={100} src={this.state.url[this.state.position]}></img>
        <button onClick={() => {this.next()}}>Anterior</button><button onClick={() => {this.previous()}}>Proximo</button>
        </div>
    }

}

export default ImgToRender