const previusOperationText = document.querySelector("#previous-operations")
const currentOperationText = document.querySelector("#current-operations")
const buttons = document.querySelectorAll("#buttons-container button")

class Calculator {
    constructor(previusOperationText, currentOperationText){
        this.previusOperationText = previusOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }

    addDigit(digit){
        if (digit === "." && this.currentOperationText.innerText.includes(".")) {
            return;
        }

        this.currentOperation = digit;
        this.updateScreen();
    }

    processOperation(operation){

        if (this.currentOperationText.innerText === "" && operation !== "C") {
            if(this.previusOperationText.innerText !== ""){
                this.changeOperation(operation);
            }
            return;
        }

      let operationValue;
      let previous = +this.previusOperationText.innerText.split(" ")[0];
      let current = +this.currentOperationText.innerText;
      
      switch (operation) {
        case "+":
            operationValue = previous + current;
            this.updateScreen(operationValue, operation, current, previous)
            break;
        default:
            return;
        case "-":
                operationValue = previous - current;
                this.updateScreen(operationValue, operation, current, previous)
                break;

        case "/":
            operationValue = previous / current;
            this.updateScreen(operationValue, operation, current, previous)
            break;

        case "*":
            operationValue = previous * current;
            this.updateScreen(operationValue, operation, current, previous)
            break;
           
        case "DEL":
                this.processDelOperator();
                break;
        case "CE":
            this.processClearCurrentOperation();
            break;
        case "C":
            this.processClearOperation();
            break;
        case "=":
            this.processEqualOperators();
            break;
      }
    }
    updateScreen( operationValue = null, operation = null, current = null, previous = null) {
        if (operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation;
        }
        else {
           if (previous === 0) {
            operationValue = current
           } 
           this.previusOperationText.innerText = `${operationValue}  ${operation}`;
           this.currentOperationText.innerText = "";
        }
    }

    changeOperation(operation){
       const mathOperations = ["*", "/", "+","-"] ;
       if (!mathOperations.includes(operation)) {
        return
       }
       this.previusOperationText.innerText = this.previusOperationText.innerText.slice(0,-1) + operation;
    }

    processDelOperator(){
      this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0,-1);
    }
    processClearCurrentOperation(){
    this.currentOperationText.innerText = "";
    }
    processClearOperation(){
        this.currentOperationText.innerText = "";
        this.previusOperationText.innerText = "";
    }
    processEqualOperators(){
        const operation = previusOperationText.innerText.split(" ")[1];
        this.processOperation(operation)
    }
}

   


const calc = new Calculator(previusOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if (+value >= 0 || value === ".") {
            calc.addDigit(value);
        } else {
            calc.processOperation(value)
        }
    })
})