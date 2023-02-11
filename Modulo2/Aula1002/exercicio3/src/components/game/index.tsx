import React from "react";

type State = {
    word: string
    tries: number
    currentTry: string
    successTry: string[]    
}


class Game extends React.Component<{}, State> {
    state = {
        word: "lorem",
        tries: 10,
        currentTry: '',
        successTry: ["", "", "", "", "", ""]       
    }

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
        return <div>
            <div>Qual letra você quer testar?</div>
            <div>{this.state.tries} tentativas</div>
            <input type="text" defaultValue={this.state.currentTry} onChange={(event) => this.currentLetter(event)} />
            <button onClick={() => this.findWord(this.state.currentTry)}>Teste</button>
            <div>{this.state.currentTry} <br /> {this.state.tries} <br /> {this.state.word}</div>
            <div>
                <div>{this.state.successTry[0]}</div>
                <div>{this.state.successTry[1]}</div>
                <div>{this.state.successTry[2]}</div>
                <div>{this.state.successTry[3]}</div>
                <div>{this.state.successTry[4]}</div>
                <div>{this.state.successTry[5]}</div>
            </div>

        </div>
    }
}

export default Game