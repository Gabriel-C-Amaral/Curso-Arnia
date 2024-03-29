import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import ModalContainer from '../../modals'
import EditSession from '../../modals/editSession'
import ImgHeadHeartVoid from '../../../../images/HeadHeartVoid.svg'
import ImggreenBall from '../../../../images/greenBall.svg'
import ImgpinIconVoid from '../../../../images/pinIconVoid.svg'
import ImgblueBall from '../../../../images/blueBall.svg'
import ImgClipsIconVoid from '../../../../images/ClipsIconVoid.svg'
import ImgpurppleBall from '../../../../images/purppleBall.svg'
import ImgboardIconVoid from '../../../../images/boardIconVoid.svg'
import ImgpinkBall from '../../../../images/pinkBall.svg'
import ImgyellowBall from '../../../../images/yellowBall.svg'

type sessionData = {
  text: string
  date: string
  card: string
  title: string
  position: number
  id: string
  type: string
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

function formatDateToDDMMYYYY(dateString: string) {
  const date = new Date(dateString)
  const day = String(date.getUTCDate()).padStart(2, '0')
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const year = String(date.getUTCFullYear())
  return `${day}/${month}/${year}`
}

function Sessao(prop: sessionData) {
  const [open, setOpen] = React.useState(false)
  const handleClose = () => setOpen(false)
  const [content, SetContent] = React.useState(() => EditSession)
  const [height, setHeight] = React.useState('466px')
  const [ball, setBall] = React.useState(ImgpinkBall)
  const [icon, setIcon] = React.useState(ImgClipsIconVoid)
  const [color, setColor] = React.useState('#00995D')
  const [isShow, setisShow] = React.useState('none')

  const [Modaltitle, setTitle] = React.useState('')
  const handleOptionClick = () => {
    setOpen(true)
    if (prop.type === 'session') {
      SetContent(() => EditSession)
      setHeight('635px')
      setTitle('Editar Sessão')
    }
    if (prop.type === 'relevant_fact') {
      SetContent(() => EditSession)
      setHeight('466px')
    }
    if (prop.type === 'attachment') {
      SetContent(() => EditSession)
      setHeight('550px')
    }
    if (prop.type === 'assessment') {
      SetContent(() => EditSession)
      setHeight('446px')
    }
  }

  function deleteItem() {
    fetch(`https://wexer-example-backend.vercel.app/api/timeline/6438810edc67c006c954c71f/occurrence/${prop.id}`, {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2MwNjVkNTZlYjNmZGZkZDg1YjIyZSIsIm5hbWUiOiJHYWJyaWVsIEFtYXJhbCIsImVtYWlsIjoiZ2FicmllbGFtYXJhbEBhcm5pYS5jb20iLCJpYXQiOjE2ODM2NzI3NTUsImV4cCI6MTY4Mzc1OTE1NX0.W30GVvRCIqAY7K4GgJNKCnTzOKQw42iZdc3SWBPd50w',

        'x-api-key': '1e7977ea-d97e-11ed-afa1-0242ac120002',

        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete item.')
        }
        // Item deleted successfully, reload page
        location.reload()
      })
      .catch(error => {
        console.error(error)
        // Handle error
      })
  }

  const truncatedText = truncateString(prop.text, 300)

  useEffect(() => {
    if (prop.position == 1) {
      setisShow('none')
    } else {
      setisShow('block')
    }

    switch (prop.card) {
      case 'session':
        setColor('#00995D')
        setIcon(ImgHeadHeartVoid)
        setBall(ImggreenBall)

        break
      case 'relevant_fact':
        setColor('#2F80ED')
        setIcon(ImgpinIconVoid)

        setBall(ImgblueBall)

        break

      case 'attachment':
        setColor('#9D28AC')

        setIcon(ImgClipsIconVoid)

        setBall(ImgpurppleBall)

        break

      case 'assessment':
        setColor('#EA1E61')

        setIcon(ImgboardIconVoid)

        setBall(ImgpinkBall)

        break

      case 'anotations':
        setColor('#FFD806')

        setIcon(ImgpinIconVoid)

        setBall(ImgyellowBall)

        break

      default:
        setBall(ImgyellowBall)
        setColor('#FFD806')

        setIcon(ImgpinIconVoid)
    }
  })

  const [isPopoverVisible, setIsPopoverVisible] = useState(false)

  function handleClick() {
    setIsPopoverVisible(!isPopoverVisible)
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
    margin-bottom: 50px;
  `
  const Title = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    width: 300px;
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

  const UpperDivisor = styled.div`
    position: absolute;
    top: -55px;
    left: 40px;

    width: 5px;
    height: 35px;
    background-color: ${color};
    display: ${isShow};
    z-index: -1;
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
  const Etc = styled.button`
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
    background-color: white;
    border: none;
  `

  const PopoverContainer = styled.div`
    display: flex;
    position: absolute;
    right: 10px;
  `
  const PopoverBody = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80px;
    height: 50px;
    padding: 6px;
    bottom: -70%;
    right: -50%;
    background-color: white;
    border: 1px solid ${color};
    border-radius: 5px;
    cursor: pointer;
  `
  const PopoverItem = styled.div`
    :hover {
      background-color: ${color};
      color: white;
    }
  `

  return (
    <Container>
      <UpperDivisor />
      <BallIcon src={ball} />
      <InsideIcon src={icon} />
      <Title>{prop.title}</Title>
      <Subtitle>{formatDateToDDMMYYYY(prop.date)}</Subtitle>
      <Body>
        {truncatedText}...
        <Link href="https://www.google.com.br/">Ver mais</Link>
      </Body>
      <PopoverContainer>
        <Etc onClick={handleClick}>...</Etc>
        {isPopoverVisible && (
          <div>
            <PopoverBody>
              <PopoverItem onClick={deleteItem}>Deletar</PopoverItem>{' '}
              <PopoverItem onClick={handleOptionClick}>Editar</PopoverItem>
            </PopoverBody>
          </div>
        )}
      </PopoverContainer>
      <ModalContainer
        Conteudo={content}
        id={prop.id}
        height={height}
        title={Modaltitle}
        onClose={handleClose}
        isOpen={open}
      />
    </Container>
  )
}

export default Sessao
