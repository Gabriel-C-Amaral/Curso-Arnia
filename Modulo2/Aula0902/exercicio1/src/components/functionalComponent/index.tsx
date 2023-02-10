
const FunctionalComponent = (props: {label: string}) => {
    function showAlert(text: string){
        return alert(text)
        
    }



    return <div>
        <button  onClick={showAlert(props.label)}>{props.label}</button>

    </div>
}

export default FunctionalComponent