import React from 'react'
import styled from 'styled-components'

type QuestionProps = {
  title?: string
  radioButtons?: string[]
  textInput?: boolean
  textInputLabel?: string | boolean | undefined
}

function Question({ title, radioButtons, textInput, textInputLabel }: QuestionProps) {
  const QuestionContainer = styled.div`
    width: 428px;
    margin-bottom: 29px;
    display: flex;
    flex-direction: column;
    margin-left: 15px;
  `

  const Title = styled.h2`
    margin-bottom: 8px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  `

  const RadioButtonContainer = styled.div`
    margin-bottom: 8px;
    position: relative;
  `

  const RadioButton = styled.input`
    margin-right: 8px;
  `
  const TextLabel = styled.label`
    margin-right: 8px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  `

  const TextInput = styled.input`
    height: 59px;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 2px 2px 2px 8px;
    width: 428px;
    height: 59px;
    border: 1px solid #868686;
    border-radius: 16px;
    ::placeholder {
      color: #868686;
    }
  `

  return (
    <QuestionContainer>
      {title && <Title>{title}</Title>}
      {radioButtons && (
        <RadioButtonContainer>
          {radioButtons.map((radioButton, index) => (
            <div key={index}>
              {' '}
              <label>
                <RadioButton type="radio" name="radioButton" />
                {radioButton}
              </label>
            </div>
          ))}
        </RadioButtonContainer>
      )}
      {textInput && (
        <>
          {textInputLabel && <TextLabel>{textInputLabel}</TextLabel>}
          <TextInput type="text" placeholder="Resposta" />
        </>
      )}
    </QuestionContainer>
  )
}

export default Question
