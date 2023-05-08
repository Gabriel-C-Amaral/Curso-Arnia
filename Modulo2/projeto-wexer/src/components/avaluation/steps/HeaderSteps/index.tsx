import styled from 'styled-components'
import Imgstep1active from '../../../../images/step1active.svg'
import Imgstep2active from '../../../../images/step2active.svg'
import Imgstep3active from '../../../../images/step3active.svg'
import Imgstep2waiting from '../../../../images/step2waiting.svg'
import Imgstep3waiting from '../../../../images/step3waiting.svg'
import Imgstep1done from '../../../../images/step1done.svg'
import Imgstep2done from '../../../../images/step2done.svg'
import ImgSavebttn from '../../../../images/saveBtn.svg'
import ImgskipBtn from '../../../../images/skipBtn.svg'

type Props = {
  steps: string
}

export default function HeaderSteps(prop: Props) {
  let img1
  let img2
  let img3
  let steptitle

  if (prop.steps === 'step1') {
    img1 = Imgstep1active
    img2 = Imgstep2waiting
    img3 = Imgstep3waiting
    steptitle = 'Entrevista Psicológica'
  }
  if (prop.steps === 'step2') {
    img1 = Imgstep1done
    img2 = Imgstep2active
    img3 = Imgstep3waiting
    steptitle = 'Aplicação de Teste'
  }
  if (prop.steps === 'step3') {
    img1 = Imgstep1done
    img2 = Imgstep2done
    img3 = Imgstep3active
    steptitle = 'Observação Comportamental'
  }

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 40px;
  `
  const Header = styled.div`
    width: 100%;
    height: 74px;
    position: relative;
    display: flex;
  `
  const Steps = styled.img`
    width: 380px;
    height: 74px;
  `
  const Content = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
  `
  const ContentHeader = styled.div`
    border-radius: 16px 16px 0 16px;
    border-left: 10px solid #017849;
    border-bottom: 3px solid #f2f2f2;
    width: 1080px;
    height: 75px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    color: #017849;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    padding-left: 24px;
    padding-right: 24px;
    align-items: center;
  `
  const Buttons = styled.div`
    display: flex;
    gap: 16px;
  `

  return (
    <Container>
      <Header>
        <Steps src={img1} />
        <Steps src={img2} />
        <Steps src={img3} />
      </Header>
      <Content>
        <ContentHeader>
          {steptitle}
          <Buttons>
            <img src={ImgSavebttn} />
            <img src={ImgskipBtn} />
          </Buttons>
        </ContentHeader>
      </Content>
    </Container>
  )
}
