import styled from 'styled-components'
import jsonData from './questions.json'
import QuestionProps from './question'
import { Link } from 'react-router-dom'
import ImgSavebttn from '../../../../images/saveBtn.svg'
import ImgskipBtn from '../../../../images/skipBtn.svg'
import Imgquestion from '../../../../images/questionMarkIcon.svg'

type QuestionData = {
  title?: string
  answer?: string[]
  text_field?: string | boolean
  divisor?: string
}

export default function Step1() {
  const questionList = jsonData.questionList as QuestionData[]

  const Content = styled.div`
    font-family: 'Montserrat';

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 954px;
    padding-left: 24px;
    padding-right: 144px;
    padding-top: 24px;
    background: #ffffff;
    position: relative;
    justify-content: space-between;
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
  const TitleQuestion = styled.div`
    justify-content: space-between;
    display: flex;
    margin-bottom: 12px;
  `

  const Bluetitle = styled.div`
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

  const BottomButtons = styled.div`
    width: 100%;
    height: 55px;
    padding: 55px;
    gap: 30px;
    position: relative;
    display: flex;
    align-items: start;
  `

  return (
    <Content>
      <div>
        <TitleQuestion>
          <Title>Sistese da Entrevista</Title>
          <img src={Imgquestion} />
        </TitleQuestion>
        <Sintese placeholder=" Nos dados registrados e observados durante a entrevista o(a) avaliado(a) declarou estar..." />
      </div>
      {questionList.map((questionlist: QuestionData, index: number) => (
        <div key={index}>
          {questionlist.divisor && (
            <>
              <Bluetitle>{questionlist.divisor}</Bluetitle>
              <Divisor />
            </>
          )}
          {typeof questionlist.title === 'string' && (
            <QuestionProps
              title={questionlist.title}
              radioButtons={questionlist.answer}
              textInput={typeof questionlist.text_field === 'string'}
              textInputLabel={questionlist.text_field}
            />
          )}
        </div>
      ))}
      <BottomButtons>
        <Link to={'/avaluationstep2'}>
          {' '}
          <img src={ImgSavebttn} />
        </Link>{' '}
        <Link to={'/avaluationstep2'}>
          <img src={ImgskipBtn} />
        </Link>
      </BottomButtons>
    </Content>
  )
}
