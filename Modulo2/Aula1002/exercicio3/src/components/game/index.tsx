import React from "react";
import './style.css'

type State = {
    word: string
    tries: number
    currentTry: string
    successTry: string[]    
}
type Props = {
    forca1: string,
    forca2: string,
    forca3: string,
    forca4: string,
    forca5: string,
    forca6: string,
    forca7: string,
    forca8: string,
    forca9: string,
    forca10: string   
}


class Game extends React.Component<{}, State> {
    state = {
        word: "gabriel",
        tries: 10,
        currentTry: '',
        successTry: ["", "", "", "", "", "", ""]       
    }

    img = [
        "https://www.soportugues.com.br/secoes/jogos/forca/img/9.gif",
        "https://www.soportugues.com.br/secoes/jogos/forca/img/8.gif",
        "https://www.soportugues.com.br/secoes/jogos/forca/img/7.gif",
        "https://www.soportugues.com.br/secoes/jogos/forca/img/6.gif",
        "https://www.soportugues.com.br/secoes/jogos/forca/img/5.gif",
        "https://www.soportugues.com.br/secoes/jogos/forca/img/4.gif",
        "https://www.soportugues.com.br/secoes/jogos/forca/img/3.gif",
        "https://www.soportugues.com.br/secoes/jogos/forca/img/2.gif",
        "https://www.soportugues.com.br/secoes/jogos/forca/img/1.gif",
                
    ]


    findWord(letter: string) {
        let array = this.state.word.split("")
        let FindLetter = array.findIndex(function(value) {
            if (value === letter) {
                return true
            } else {  
                return false
            }
        })
        if (FindLetter !== -1) {
           this.successfullGuess(letter, FindLetter)
        } else {
            this.setState((state) => {
                return {tries: state.tries - 1}
            })
        }
    }
    currentLetter(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            currentTry: event.target.value
        })
    }    

    successfullGuess = (value: string, index: number) => {
        this.setState(({successTry}) => {
            const newList = [...successTry]
            newList[index] = value
            return {successTry: newList}
        })
    }


    render() {
        if (this.state.tries > 0) {
            return <div>
                <img src={this.img[this.state.tries -1]}  />
            <div>Qual letra você quer testar?</div>
            <input type="text" maxLength={1} defaultValue={this.state.currentTry} onChange={(event) => this.currentLetter(event)} />
            <button onClick={() => this.findWord(this.state.currentTry)}>Tentar</button>
            <div className="flexing">
              {this.state.successTry.map(function(value: string, index: number) {
                return <div className="success">{value}</div>
              })}
            </div>
            <div>{this.state.tries} tentativas restantes</div>


        </div>
        } else {
            return <div><img src="https://i.scdn.co/image/ab67616d0000b273ac7a2455e465a59b6e9c628d" alt="" /></div>
        }
    }
}

export default Game