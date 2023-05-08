import styled from 'styled-components'
import ImgProfile from '../../../images/profileIcon.svg'
import ImgdateIcon from '../../../images/dateIcon.svg'
import ImgprofessionIcon from '../../../images/professionIcon.svg'
import ImgeducationIcon from '../../../images/educationIcon.svg'

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
    position: relative;
    /* left: 138px;
    top: 200px; */
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
    width: 234px;
    height: 22px;
    left: 24px;
    top: 24px;
    position: relative;
    margin-bottom: 23px;
  `

  const Icon = styled.img`
    margin-right: 9px;
  `

  return (
    <Card>
      <CardName>Identificação do Paciente</CardName>
      <Title>
        <Icon src={ImgProfile} /> Paciente
      </Title>
      <Subtitle>{pacient.name}</Subtitle>
      <Title>
        <Icon src={ImgdateIcon} /> Nascimento
      </Title>
      <Subtitle>{pacient.birthday}</Subtitle>
      <Title>
        <Icon src={ImgprofessionIcon} /> Profissão
      </Title>
      <Subtitle>{pacient.occupation}</Subtitle>
      <Title>
        <Icon src={ImgeducationIcon} /> Escolaridade
      </Title>
      <Subtitle>{pacient.education}</Subtitle>
    </Card>
  )
}

export default Identity
