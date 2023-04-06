import styled from 'styled-components'

export default function NewFile() {
  const Container = styled.div`
    display: flex;
    position: relative;
    top: -10px;
    flex-direction: column;
    /* height: 368px; */
    width: 640px;
    gap: 12px;
  `
  const InputLittle = styled.input`
    border: 1px solid #bdbdbd;
    border-radius: 8px;
    box-sizing: border-box;
    height: 48px;
    width: 182px;
    position: relative;
    margin-left: 16px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    margin-top: 9px;
  `
  const InputMedium = styled.input`
    border: 1px solid #bdbdbd;
    border-radius: 8px;
    box-sizing: border-box;
    height: 48px;
    width: 380px;
    position: relative;
    margin-top: 8px;
    margin-left: 16px;
    margin-bottom: 16px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  `
  const InputLarge = styled.textarea`
    border: 1px solid #bdbdbd;
    border-radius: 8px;
    box-sizing: border-box;
    height: 160px;
    width: 590px;
    position: relative;
    margin-top: 8px;
    margin-left: 16px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    padding: 8px;
  `
  const Label = styled.label`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    align-items: center;
    color: #4f4f4f;
    position: relative;
    margin-left: 16px;
    margin-bottom: 4px;
  `
  const InputContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: space-around;
    align-items: flex-start;
    margin-right: 16px;
    flex-direction: column;
  `
  const SideContainer = styled.div`
    position: relative;
    display: flex;
    align-items: baseline;
  `

  const InputFile = styled.input`
    padding: 8px;
    width: 135px;
    height: 34px;
    width: 135px;
    height: 34px;
    background: #2f80ed;
    border-radius: 8px;
  `

  return (
    <Container>
      <SideContainer>
        <InputContainer>
          <Label htmlFor="date">Data:*</Label>
          <InputLittle id="date" type="date" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="date">Título:*</Label>
          <InputMedium id="titulo" type="text" />
        </InputContainer>
      </SideContainer>
      <InputContainer>
        <Label htmlFor="description">Descrição:*</Label>
        <InputLarge />
        <InputFile type="file" />
      </InputContainer>
    </Container>
  )
}
