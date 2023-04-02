import * as React from 'react'
import Modal from '@mui/material/Modal'
import styled from 'styled-components'
import TextEditor from './textEditor'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function ModalContainer(props: Props) {
  const { isOpen, onClose } = props

  const [open, setOpen] = React.useState(isOpen)

  const handleClose = () => setOpen(false)

  const DefaultContainer = styled.div`
    position: absolute;
    top: calc(50% - 236px);
    left: calc(50% - 321px);
    width: 642px;
    height: 473px;
    background: #ffffff;
    border-radius: 8px;
    display: flex;
  `
  const Header = styled.div`
    width: 580px;
    height: 29px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    color: #00995d;
    margin-top: 24px;
    margin-left: 32px;
    justify-content: space-between;
    position: absolute;
  `

  const Content = styled.div`
    width: 100%;
    height: 266px;
    position: absolute;
    bottom: 100px;
  `

  const Footer = styled.div`
    width: 642px;
    height: 97px;
    left: 0px;
    bottom: 0px;
    background: #ffffff;
    border-top: 2px solid #e0e0e0;
    position: absolute;
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #616161;
    justify-content: flex-end;
    gap: 24px;
  `

  const SaveButton = styled.div`
    background: #00995d;
    border-radius: 24px;
    width: 147px;
    height: 48px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 48px;
    align-items: center;
    text-align: center;
    color: #ffffff;
    margin-right: 32px;
  `
  const Cancel = styled.span`
    cursor: pointer;
  `

  return (
    <Modal
      open={open}
      onClose={() => {
        handleClose()
        onClose()
      }}
    >
      <DefaultContainer>
        <Header>
          Anotações Pessoais{' '}
          <img
            onClick={() => {
              handleClose()
              onClose()
            }}
            src="src\images\closeButton.svg"
          />
        </Header>
        <Content>
          <TextEditor />
        </Content>
        <Footer>
          <Cancel
            onClick={() => {
              handleClose()
              onClose()
            }}
          >
            Cancelar
          </Cancel>
          <SaveButton>Criar</SaveButton>{' '}
        </Footer>
      </DefaultContainer>
    </Modal>
  )
}
