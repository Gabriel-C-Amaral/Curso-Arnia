import React from "react";




class FirstButton extends React.Component<{}, {num1: number, num2:number}> {
    state = {
        num1: 0,
        num2: 100

    }

    sumNumber = () => {
        this.setState((state) => {
            
            return   {num1: state.num1 + 1}
        });
             
    }

    decrease = () => {
        this.setState((state) => {
            return {num2: state.num2 -1}
        })
    }


    render() {
        return <div><button onClick={() => this.sumNumber()}>button + {this.state.num1}</button>
        <button onClick={() => this.decrease()}>button - {this.state.num2}</button>
        
        </div>
    }
}

export default FirstButton