const current = document.querySelector("#current")
const previous = document.querySelector("#previous")
const buttons = document.querySelectorAll("#container button")

class Calculator {

    constructor(current, previous){
        this.previous = previous;
        this.current = current;
    }

    addNumber(digit){
        this.current = digit;
    }
    attDisplay(){
        
    }
}

const calc = new Calculator(current, previous)

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        const value = e.target.innerText;
        calc.addNumber(value)
    })
})