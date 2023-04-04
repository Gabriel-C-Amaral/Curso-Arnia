import styled from 'styled-components'
import * as React from 'react'
import ModalContainer from '../modals'
import NewSession from '../modals/newSession'

function HeadMenu() {
  const [open, setOpen] = React.useState(true)
  const handleClose = () => setOpen(false)

  const Container = styled.div`
    width: 924px;
    height: 176px;
    position: absolute;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    left: 502px;
    top: 200px;
    display: flex;
    justify-content: space-around;
    z-index: -1;
  `
  const Options = styled.div`
    width: fit-content;
    height: 32px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 32px;
    color: #616161;
    position: relative;
    top: 121px;
    align-items: center;
    gap: 11px;
    display: flex;
    cursor: pointer;
  `
  const Divisor = styled.div`
    position: absolute;
    width: 874px;
    height: 1px;
    left: 24px;
    top: 96px;
    background: #e0e0e0;
  `
  const Top = styled.div`
    width: 924px;
    height: 95px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
  `
  const Bolder = styled.div`
    color: #212121;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    margin-left: 24px;
    margin-right: 11px;
    position: relative;
  `

  const NewList = styled.div`
    position: relative;
    width: 479px;
    height: 48px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 170%;
    display: flex;
    align-items: center;
    color: #616161;
    justify-content: space-between;
    padding-left: 16px;
  `

  const ArrowDown = styled.img`
    position: absolute;
    right: 21px;
  `

  const InicialDate = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    position: relative;
    margin-right: 20px;
  `

  return (
    <Container>
      <Top>
        <Bolder>Serviço: </Bolder>
        <NewList>
          Novo Acompanhamento <ArrowDown src="src\images\arrowDownReto.svg" />
        </NewList>
        <Bolder>Data Inicial: </Bolder>
        <InicialDate>18/10/2022</InicialDate>
        <img src="src\images\editIcon.svg" />
        <img src="src\images\eraseIcon.svg" />
      </Top>
      <Options onClick={() => setOpen(true)}>
        <ModalContainer Conteudo={NewSession} height="635px" title="Nova Sessão" onClose={handleClose} isOpen={open} />
        <img src="src\images\headHeart.svg" />
        Sessão
      </Options>
      <Options>
        <img src="src\images\pinIcon.svg" />
        Fato Relevante
      </Options>
      <Options>
        <img src="src\images\ClipsIcon.svg" />
        Anexo
      </Options>
      <Options>
        <img src="src\images\BoardIcon.svg" />
        Avaliação Psicológica
      </Options>
      <Divisor />
    </Container>
  )
}

export default HeadMenu
