import React from 'react'
import styled from 'styled-components'

type QuestionProps = {
  title: string
  radioButtons?: string[]
  textInput?: boolean
}

const QuestionContainer = styled.div`
  margin-bottom: 16px;
`

const Title = styled.h2`
  margin-bottom: 8px;
`

const RadioButtonContainer = styled.div`
  margin-bottom: 8px;
`

const RadioButton = styled.input`
  margin-right: 8px;
`

const TextInput = styled.input`
  margin-top: 8px;
`

const Question: React.FC<QuestionProps> = ({ title, radioButtons, textInput }) => {
  return (
    <QuestionContainer>
      {title && <Title>{title}</Title>}
      {radioButtons && (
        <RadioButtonContainer>
          {radioButtons.map((radioButton, index) => (
            <label key={index}>
              <RadioButton type="radio" name="radioButton" />
              {radioButton}
            </label>
          ))}
        </RadioButtonContainer>
      )}
      {textInput && <TextInput type="text" />}
    </QuestionContainer>
  )
}

export default Question
