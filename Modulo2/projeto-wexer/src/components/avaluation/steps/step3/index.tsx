import styled from 'styled-components'
import TextEditor from '@/components/prontuário/modals/textEditor'

export default function Step3() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 500px;
    background: #ffffff;
    width: calc(80vw - 117px);
    padding-left: 40px;
    padding-bottom: 20px;
  `
  const TextEditorContainer = styled.div`
    position: relative;
    width: 747px;
    height: 400px;
    margin-top: 40px;
    .ql-container {
      height: 266px;
    }
  `
  const InputTitle = styled.div`
    height: 41.45px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #212121;
  `
  const SaveButton = styled.img`
    width: 200px;
    position: relative;
  `

  return (
    <Container>
      <TextEditorContainer>
        <InputTitle>Síntese das observações comportamentais</InputTitle>
        <TextEditor default="" name="" />
      </TextEditorContainer>
      <SaveButton src="src\images\saveBtn.svg" />
    </Container>
  )
}
