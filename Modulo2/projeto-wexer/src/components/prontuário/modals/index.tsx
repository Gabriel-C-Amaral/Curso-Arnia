import * as React from 'react'
import Modal from '@mui/material/Modal'
import styled from 'styled-components'

type EditProp = {
  editId: string
  type?: string
}

type Props = {
  isOpen: boolean
  onClose: () => void
  title: string
  height: string
  Conteudo: (propEdit: EditProp) => JSX.Element
  id: string
}

export default function ModalContainer(props: Props) {
  const { isOpen, onClose, title, height, Conteudo, id } = props

  const DefaultContainer = styled.div`
    position: absolute;
    top: calc(50% - 250px);
    left: calc(50% - 321px);
    width: 642px;
    height: ${height};
    background: #ffffff;
    border-radius: 8px;
    display: flex;
    border: none;
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
    height: fit-content;
    position: absolute;
    bottom: 100px;
    .ql-container {
      height: 266px;
    }
  `

  return (
    <Modal
      open={isOpen}
      onClose={() => {
        onClose()
      }}
    >
      <DefaultContainer>
        <Header>
          {title}
          <img
            onClick={() => {
              onClose()
            }}
            src="src\images\closeButton.svg"
          />
        </Header>
        <Content>
          <Conteudo editId={id} />
        </Content>
      </DefaultContainer>
    </Modal>
  )
}
