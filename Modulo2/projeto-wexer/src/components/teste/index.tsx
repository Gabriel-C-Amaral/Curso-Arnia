import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

function Teste() {
  return (
    <div className="Teste">
      <Button>dasdsadas</Button>
      <h1>oi</h1>
    </div>
  )
}

export default Teste
