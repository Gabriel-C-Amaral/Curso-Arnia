import styled from "styled-components"

/**
 * Tarefa 2
 * O container do card deverá ter as seguintes características:
 *  - Borda cinza de 1px sólida
 *  - 10 pixels de raio de borda
 *  - Comprimento de 300 pixels
 *  - 15 pixels de padding
 *
 * O cabeçalho do card deverá fazer com que o título fique lado a lado com
 * o botão de X. Os dois devem se alinhar verticalmente ao centro e horizontalmente
 * devem ficar o máximo possível afastados entre si.
 *
 * O título deverá ter 20px de tamanho de fonte, a fonte de todo o card deverá ser
 * sans-serif e o corpo do card deverá ter fonte de 14px.
 */

export const Container = styled.div`
border: 1px solid gray;
border-radius: 10px;
width: 300px;
padding: 15px;
font-family: sans-serif;

`

export const Button = styled.button`
  background: red;
  width: 20px;
  height: 20px;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
`

export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`

export const Title = styled.h2`
font-size: 20px;

`

export const Text = styled.p`
font-size: 14px;
`
