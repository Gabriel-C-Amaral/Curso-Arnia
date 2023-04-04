import styled from 'styled-components'
import ModalContainer from '../modals'
import * as React from 'react'
import TextEditor from '../modals/textEditor'

function Goals() {
  const [open, setOpen] = React.useState(false)
  const handleClose = () => setOpen(false)

  const Card = styled.div`
    width: 339px;
    height: 226px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    position: absolute;
    left: 139px;
    top: 599px;
    z-index: -2;
  `
  const Title = styled.div`
    position: absolute;
    width: 204px;
    height: 22px;
    left: 24px;
    top: 24px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #212121;
  `
  const EditIcon = styled.img`
    position: absolute;
    right: 16px;
    top: 24px;
  `

  const Content = styled.div`
    position: absolute;
    width: 288px;
    height: 135px;
    left: 24px;
    top: 70px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #424242;
  `

  return (
    <Card>
      <ModalContainer
        Conteudo={TextEditor}
        height="473px"
        title="Demandas e objetivos"
        onClose={handleClose}
        isOpen={open}
      />
      <Title>Demandas e objetivos</Title>
      <EditIcon src="src\images\editIcon.svg" onClick={() => setOpen(true)} />
      <Content>
        No dia 12 de fevereiro de 2015, a paciente B. A. V, 40 anos, solteira e residente na cidade de Manaus, procurou
        atendimento psicológico em virtude de estar apresentando...
      </Content>
    </Card>
  )
}

export default Goals
