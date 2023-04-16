import styled from 'styled-components'
import React, { useState } from 'react'
import Testes from './testes'

export default function PopOver() {
  const [showPopover, setShowPopover] = useState(false)
  const [options, setOptions] = useState([
    { label: 'Atenção Concentrada/Seletiva', checked: false },
    { label: 'Memória', checked: false },
    { label: 'Inteligência', checked: false }
  ])
  const [mappedTests, setTests] = useState(<></>)
  const [shownPlease, setShow] = useState('contents')

  const handleCheckboxChange = (index: number) => {
    const updatedOptions = [...options]
    updatedOptions[index].checked = !updatedOptions[index].checked
    setOptions(updatedOptions)
  }

  const handleSaveButtonClick = () => {
    setTests(
      <>{options.map((option, index) => (option.checked ? <Testes key={index} title={option.label} /> : null))}</>
    )

    setShowPopover(!showPopover)
  }

  const handlePopoverClick = () => {
    setShow('none')
    setShowPopover(!showPopover)
  }

  const AddField = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    gap: 13px;
    margin: 30px;
  `
  const PopOverContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    align-items: baseline;
  `

  const ImgButton = styled.img`
    width: 201px;
    height: 54px;
  `

  const Teste = styled.div`
    width: 369px;
    height: fit-content;
    position: relative;
    background-color: black;
    margin-top: -36px;
    background: #ffffff;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 16px 16px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    gap: 38px;
    padding-top: 25px;
    padding-bottom: 25px;
    flex-direction: column;
  `

  const OptionContainer = styled.div`
    display: flex;
    align-items: center;
  `

  const OptionCheckbox = styled.input`
    margin-right: 8px;
    transform: scale(1.5);
    margin-left: 8px;
    background-color: grey;
  `

  const SaveButton = styled.button`
    background-color: #00995d;
    color: #ffffff;
    padding: 8px 16px;
    border-radius: 24px;
    width: 257px;
    height: 48px;
    border: none;
    cursor: pointer;
    align-self: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  `
  const PleaseText = styled.span`
    display: ${shownPlease};
  `

  return (
    <>
      {mappedTests}
      <PopOverContainer>
        <AddField onClick={handlePopoverClick}>
          <PleaseText>Por favor, adicione um teste </PleaseText>
          <ImgButton src="src\images\addButton.svg" />
        </AddField>
        {showPopover && (
          <Teste>
            {options.map((option, index) => (
              <OptionContainer key={index}>
                <OptionCheckbox type="checkbox" checked={option.checked} onChange={() => handleCheckboxChange(index)} />
                {option.label}
              </OptionContainer>
            ))}
            {options.some(option => option.checked) && <SaveButton onClick={handleSaveButtonClick}>Save</SaveButton>}
          </Teste>
        )}
      </PopOverContainer>
    </>
  )
}
