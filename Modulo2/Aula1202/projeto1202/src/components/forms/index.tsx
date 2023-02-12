import './style.css'


const Forms = () => {
    return <div className="forms">
        <label htmlFor="tasknum">Task Num</label>
        <input type="number" name="tasknum" id="tasknum" />
        <label htmlFor="description">Descrição</label>
        <input type="text" name="description" id="description"/>
        <label htmlFor="data">Data</label>
        <input type="text" name="data" id="data" />
        <label htmlFor="status">Status</label>
        <input type="text" name="status" id="status" />
        <button>Adicionar</button>

    </div>
}

export default Forms