import styled from 'styled-components'

type sessionData = {
  text: string
  date?: string
}
function truncateString(str: string, maxLength: number) {
  if (str.length <= maxLength) {
    return str
  }

  const lastSpaceIndex = str.lastIndexOf(' ', maxLength)

  if (lastSpaceIndex === -1) {
    return str.substring(0, maxLength)
  }

  return str.substring(0, lastSpaceIndex)
}

function Sessao(prop: sessionData) {
  const truncatedText = truncateString(prop.text, 300)

  const Container = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 924px;
    height: 210px;
    left: 0px;
    top: 24px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 0px 8px 8px 0px;
    border-left: 4px solid #00995d;
    font-family: 'Montserrat';
    font-style: normal;
    display: Flex;
  `
  const Title = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    width: 86px;
    height: 22px;
    color: #000000;
    position: Relative;
    left: 24px;
    top: 40px;
  `
  const Subtitle = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    width: 165px;
    height: 17px;
    position: absolute;
    left: 24px;
    top: 66px;
    color: #616161;
  `
  const Body = styled.div`
    position: absolute;
    width: 881px;
    height: 79px;
    left: 24px;
    top: 107px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #424242;
  `
  const Link = styled.a`
    color: #2f80ed;
    text-decoration: none;
    margin-left: 5px;
  `
  const BallIcon = styled.img`
    width: 48px;
    height: 48px;
    position: absolute;
    left: 20px;
    top: -24px;
  `
  const InsideIcon = styled.img`
    position: absolute;
    left: 32px;
    top: -14px;
  `

  return (
    <Container>
      <BallIcon src="src\images\greenBall.svg" />
      <InsideIcon src="src\images\HeadHeartVoid.svg" />
      <Title>Sessão 01</Title>
      <Subtitle>15 de setembro de 2022</Subtitle>
      <Body>
        {truncatedText}...
        <Link href="https://www.google.com.br/">Ver mais</Link>
      </Body>
    </Container>
  )
}

export default Sessao
