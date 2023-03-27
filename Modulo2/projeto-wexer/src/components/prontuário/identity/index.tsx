import styled from 'styled-components'

function Identity() {
  const Card = styled.div`
    width: 340px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    left: 50%;
    top: 30%;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  `
  const Title = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 170%;
    color: #00995d;
  `

  return (
    <Card>
      <Title>
        <img src="src\images\profileIcon.svg" /> Paciente
      </Title>
    </Card>
  )
}

export default Identity
