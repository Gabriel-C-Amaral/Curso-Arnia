import styled from 'styled-components'
// import questions from './questions.json'
import QuestionProps from './teste'

export default function Step1() {
  const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 954px;
    padding-left: 24px;
    padding-right: 144px;
    padding-top: 24px;
    background: #ffffff;
    position: relative;
    left: 14px;
  `

  const Title = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #4f4f4f;
  `
  const Sintese = styled.textarea`
    border: 1px solid #bdbdbd;
    border-radius: 8px;
    background: #ffffff;
    box-sizing: border-box;
    width: 959px;
    height: 149px;
    padding: 10px;
    ::placeholder {
      color: #c2c2c2;
    }
  `
  const TittleQuestion = styled.div`
    justify-content: space-between;
    display: flex;
    margin-bottom: 12px;
  `

  const BlueTittle = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #2d9cdb;
    margin-top: 32px;
  `
  const Divisor = styled.div`
    width: 958px;
    height: 1px;
    background: #c4c4c4;
    margin-top: 16px;
    margin-bottom: 16px;
  `
  // const Questionfield = styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   width: 438px;
  // `

  return (
    <Content>
      <div>
        <TittleQuestion>
          <Title>Sistese da Entrevista</Title>
          <img src="src\images\questionMarkIcon.svg" />
        </TittleQuestion>
        <Sintese placeholder=" Nos dados registrados e observados durante a entrevista o(a) avaliado(a) declarou estar..." />
      </div>
      <BlueTittle>Condições para realização da avaliação</BlueTittle>
      <Divisor />
      <QuestionProps title="01 - Está descansado hoje?" radioButtons={['sim', 'não']} textInput={true} />
    </Content>
  )
}
