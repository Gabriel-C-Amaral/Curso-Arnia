import styled from 'styled-components'
import * as React from 'react'
import ModalContainer from '../modals'
import NewSession from '../modals/newSession'
import NewFact from '../modals/newFact'
import NewFile from '../modals/newFile'
import NewAvaluation from '../modals/newAvaluation'
import ImgarrowDownReto from '../../../images/arrowDownReto.svg'
import ImgeditIcon from '../../../images/editIcon.svg'
import ImgeraseIcon from '../../../images/eraseIcon.svg'
import ImgheadHeart from '../../../images/headHeart.svg'
import ImgpinIcon from '../../../images/pinIcon.svg'
import ImgClipsIcon from '../../../images/ClipsIcon.svg'
import ImgBoardIcon from '../../../images/ClipsIcon.svg'

function HeadMenu() {
  const [open, setOpen] = React.useState(false)
  const handleClose = () => setOpen(false)
  const [content, SetContent] = React.useState(() => NewFact)
  const [height, setHeight] = React.useState('466px')

  const [Modaltitle, setTitle] = React.useState('')
  const handleOptionClick = (Modaltitle: string) => {
    setTitle(Modaltitle)
    setOpen(true)
    if (Modaltitle === 'Sessão') {
      SetContent(() => NewSession)
      setHeight('635px')
    }
    if (Modaltitle === 'Fato relevante') {
      SetContent(() => NewFact)
      setHeight('466px')
    }
    if (Modaltitle === 'Anexo') {
      SetContent(() => NewFile)
      setHeight('550px')
    }
    if (Modaltitle === 'Avaliação Psicológica') {
      SetContent(() => NewAvaluation)
      setHeight('446px')
    }
  }

  const Container = styled.div`
    width: 924px;
    height: 176px;
    position: relative;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    display: flex;
    justify-content: space-around;
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
      <ModalContainer id="" Conteudo={content} height={height} title={Modaltitle} onClose={handleClose} isOpen={open} />
      <Top>
        <Bolder>Serviço: </Bolder>
        <NewList>
          Novo Acompanhamento <ArrowDown src={ImgarrowDownReto} />
        </NewList>
        <Bolder>Data Inicial: </Bolder>
        <InicialDate>18/10/2022</InicialDate>
        <img src={ImgeditIcon} />
        <img src={ImgeraseIcon} />
      </Top>
      <Options onClick={() => handleOptionClick('Sessão')}>
        <img src={ImgheadHeart} />
        Sessão
      </Options>
      <Options onClick={() => handleOptionClick('Fato relevante')}>
        <img src={ImgpinIcon} />
        Fato Relevante
      </Options>
      <Options onClick={() => handleOptionClick('Anexo')}>
        <img src={ImgClipsIcon} />
        Anexo
      </Options>
      <Options onClick={() => handleOptionClick('Avaliação Psicológica')}>
        <img src={ImgBoardIcon} />
        Avaliação Psicológica
      </Options>
      <Divisor />
    </Container>
  )
}

export default HeadMenu
