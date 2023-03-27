import styled from 'styled-components'

type person = {
  name: string
  birthday: string
  occupation: string
  education: string
}

function Identity(pacient: person) {
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
    position: relative;
    left: 24px;
    margin-top: 14px;
  `

  const Subtitle = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 170%;
    color: #616161;
    position: relative;
    left: 48px;
  `

  const CardName = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #212121;
    width: 229px;
    height: 22px;
    left: 24px;
    top: 24px;
    position: relative;
    margin-bottom: 15px;
  `

  const Icon = styled.img`
    margin-right: 9px;
  `

  return (
    <Card>
      <CardName>Identificação do Paciente</CardName>
      <Title>
        <Icon src="src\images\profileIcon.svg" /> Paciente
      </Title>
      <Subtitle>{pacient.name}</Subtitle>
      <Title>
        <Icon src="src\images\dateIcon.svg" /> Nascimento
      </Title>
      <Subtitle>{pacient.birthday}</Subtitle>
      <Title>
        <Icon src="src\images\professionIcon.svg" /> Profissão
      </Title>
      <Subtitle>{pacient.occupation}</Subtitle>
      <Title>
        <Icon src="src\images\educationIcon.svg" /> Escolaridade
      </Title>
      <Subtitle>{pacient.education}</Subtitle>
    </Card>
  )
}

export default Identity
