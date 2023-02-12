import sheet from '../../images/sheet.png'
import './style.css'


const Header = () => {
    return <div>
        <div className='gerenciador'> 
        <img id='sheet' src={sheet} alt="" />
         Gerenciador de tarefas
        </div>
        <div className="buttonAdd">+ Adicionar nova tarefa</div>

    </div>
}

export default Header