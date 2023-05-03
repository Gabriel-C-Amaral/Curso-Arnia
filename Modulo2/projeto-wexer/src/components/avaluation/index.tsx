import styled from 'styled-components'
import HeaderSteps from './steps/HeaderSteps'
import Step1 from './steps/step1'
import Step2 from './steps/step2'
import Step3 from './steps/step3'
import ScrollToTopButton from '../backtotop'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Container = styled.div`
  display: flex;
  width: calc(100% - 80px);
  position: relative;
  top: 100px;
  left: 80px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`
const Header = styled.div`
  width: calc(100vw - 100px);
  left: 40px;
  height: 48px;
  background: #ffffff;
  border-radius: 16px 0 0 16px;
  position: relative;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
`
const InsideHeader = styled.div`
  margin-left: 16px;
  display: flex;
  gap: 9px;
`
const Content = styled.div`
  position: relative;
  width: 80vw;
  left: 37px;
  margin-top: 16px;
`

type Props = {
  step: string
}

export default function AvaluationPage(prop: Props) {
  const [step, setStep] = useState(<Step1 />)

  useEffect(() => {
    if (prop.step === 'step1') {
      setStep(<Step1 />)
    }
    if (prop.step === 'step2') {
      setStep(<Step2 />)
    }
    if (prop.step === 'step3') {
      setStep(<Step3 />)
    }
  }, [])

  return (
    <Container>
      <Header>
        <Link to={'/'}>
          <InsideHeader>
            <img src="src\images\arrowLeftBack.svg" /> Voltar
          </InsideHeader>
        </Link>
        <InsideHeader>|</InsideHeader>
        <InsideHeader>
          <b>Avaliação Psicológica</b>
        </InsideHeader>
        <InsideHeader>|</InsideHeader>
        <InsideHeader>
          <b>Data:</b> 10/09/2022
        </InsideHeader>
      </Header>
      <Content>
        <HeaderSteps steps={prop.step} />
        {step}
      </Content>
      <ScrollToTopButton />
    </Container>
  )
}
