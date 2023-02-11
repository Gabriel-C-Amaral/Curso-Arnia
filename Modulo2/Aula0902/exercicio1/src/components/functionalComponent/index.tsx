import React from "react"
// function showAlert(text: string){
//     return alert(text)
    
// }

const showAlert = (message: string) => {
    alert(message)
}




const FunctionalComponent = (props: {label: string}) => {
    
    return <div>
        <button  onClick={() => showAlert(props.label)}>{props.label}</button>

    </div>
}

export default FunctionalComponent