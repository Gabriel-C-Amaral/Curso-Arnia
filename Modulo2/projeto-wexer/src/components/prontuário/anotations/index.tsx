import styled from 'styled-components'
import ModalContainer from '../modals'
import * as React from 'react'
import TextEditor from '../modals/textEditor'
import ImgEditButton from '../../../images/editIcon.svg'

type Prop = {
  content: string
}

function Anotations(prop: Prop) {
  const [open, setOpen] = React.useState(false)
  const handleClose = () => setOpen(false)

  const Card = styled.div`
    width: 339px;
    height: 226px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    position: relative;
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
        id=""
        Conteudo={() => <TextEditor name="personalAnnotations" default={prop.content} />}
        height="473px"
        title="Anotações Pessoais"
        onClose={handleClose}
        isOpen={open}
      />
      <Title>Anotações Pessoais</Title>
      <EditIcon src={ImgEditButton} onClick={() => setOpen(true)} />
      <Content>{prop.content}</Content>
    </Card>
  )
}

export default Anotations
