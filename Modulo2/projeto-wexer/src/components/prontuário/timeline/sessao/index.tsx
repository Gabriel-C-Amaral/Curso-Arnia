import styled from 'styled-components'

type sessionData = {
  text: string
  date?: string
  card: 'session' | 'fact' | 'docs' | 'avaluation' | 'anotations'
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
  let color: string
  let icon: string
  let ball: string

  switch (prop.card) {
    case 'session':
      color = '#00995D'
      icon = 'src/images/HeadHeartVoid.svg'
      ball = 'src/images/greenBall.svg'

      break
    case 'fact':
      color = '#2F80ED'
      icon = 'src/images/pinIconVoid.svg'
      ball = 'src/images/blueBall.svg'

      break

    case 'docs':
      color = '#9D28AC'
      icon = 'src/images/ClipsIconVoid.svg'
      ball = 'src/images/purppleBall.svg'

      break

    case 'avaluation':
      color = '#EA1E61'
      icon = 'src/images/boardIconVoid.svg'
      ball = 'src/images/pinkBall.svg'

      break

    case 'anotations':
      color = '#FFD806'
      icon = 'src/images/pinIconVoid.svg'
      ball = 'src/images/yellowBall.svg'

      break

    default:
      ball = 'src/images/defaultBall.svg'
      color = '#FFD806'
      icon = 'src/images/pinIconVoid.svg'
  }

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
    border-left: 4px solid ${color};
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
  const Etc = styled.div`
    position: absolute;
    width: 24px;
    height: 24px;
    right: 24px;
    top: 24px;
    text-align: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    align-items: center;
    line-height: 10px;
    cursor: pointer;
  `

  return (
    <Container>
      <BallIcon src={ball} />
      <InsideIcon src={icon} />
      <Title>Sessão 01</Title>
      <Subtitle>15 de setembro de 2022</Subtitle>
      <Body>
        {truncatedText}...
        <Link href="https://www.google.com.br/">Ver mais</Link>
      </Body>
      <Etc>...</Etc>
    </Container>
  )
}

export default Sessao
