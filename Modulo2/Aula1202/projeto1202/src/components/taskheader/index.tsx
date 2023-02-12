import React from "react";
import './style.css'




class Taskheader extends React.Component {
    render() {
        return <div className="cabecalho">
        <div className="row cabecalho">
        <div className="col-2">Núm</div>
        <div className="col-3">Descrição</div>
        <div className="col-3">Data de Entrega</div>
        <div className="col-3">Status<select id="statusFilter" >
          <option className="statusOptions" selected={true} value=" ">Todos</option>
          <option className="statusOptions"  value="Concluído">Concluído</option>
          <option className="statusOptions" value="Em-Andamento">Em andamento</option>
          <option className="statusOptions" value="Stopped">Stopped</option>
      </select></div>
        <div className="col-1">Ação</div>
    </div>       
        </div>
    }
}

export default Taskheader