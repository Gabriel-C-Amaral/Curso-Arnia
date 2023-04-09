import React from 'react'
import styled from 'styled-components'

const QuestionContainer = styled.div`
  margin-bottom: 16px;
`

const QuestionText = styled.p`
  margin-bottom: 8px;
`

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

const RadioButton = styled.input`
  margin-right: 8px;

  /* Set color of checked radio button to green */
  &:checked {
    & + label {
      color: green;
    }
  }
`

const Label = styled.label``

const TextField = styled.input`
  padding: 8px;
  width: 100%;
`

const MyComponent = () => {
  const [selectedOption, setSelectedOption] = React.useState('')
  const [textInput, setTextInput] = React.useState('')

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSelectedOption(value)
    if (value !== 'other') {
      setTextInput('')
    }
  }

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value)
  }

  return (
    <QuestionContainer>
      <QuestionText>What is your favorite color?</QuestionText>
      <RadioContainer>
        <RadioButton
          type="radio"
          name="colorOption"
          value="red"
          checked={selectedOption === 'red'}
          onChange={handleOptionChange}
        />
        <Label htmlFor="colorOption">Red</Label>
      </RadioContainer>
      <RadioContainer>
        <RadioButton
          type="radio"
          name="colorOption"
          value="blue"
          checked={selectedOption === 'blue'}
          onChange={handleOptionChange}
        />
        <Label htmlFor="colorOption">Blue</Label>
      </RadioContainer>
      <RadioContainer>
        <RadioButton
          type="radio"
          name="colorOption"
          value="green"
          checked={selectedOption === 'green'}
          onChange={handleOptionChange}
        />
        <Label htmlFor="colorOption">Green</Label>
      </RadioContainer>
      {selectedOption === 'other' && (
        <TextField type="text" placeholder="Other color" value={textInput} onChange={handleTextChange} />
      )}
    </QuestionContainer>
  )
}

export default MyComponent
