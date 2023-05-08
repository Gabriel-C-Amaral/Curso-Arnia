import styled from 'styled-components'

function Header() {
  const Container = styled.div`
    width: 1288px;
    height: 69px;
    background: #ffffff;
    border-radius: 8px;
    position: relative;
    /* top: 107px;
    left: 138px; */
    display: flex;
    justify-content: flex-start;
  `

  const NotSelected = styled.div`
    position: absolute;
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 36px;
    align-items: center;
    text-align: center;
    width: 222px;
    height: 44px;
    margin-top: 17px;
    border-bottom: 2px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
    color: #e0e0e0;
    left: 8px;
  `
  const Selected = styled.div`
    position: relative;
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 36px;
    align-items: center;
    text-align: center;
    width: 222px;
    height: 44px;
    margin-top: 17px;
    border-bottom: 2px solid #017849;
    border-right: 1px solid #f2f2f2;
    color: #017849;
    left: 230px;
  `
  const SearchBar = styled.div`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-sizing: border-box;
    width: 386px;
    height: 48px;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;
    position: absolute;
    right: 24px;
    display: flex;
  `
  const SearchText = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: #9e9e9e;
    left: 16px;
    position: absolute;
  `
  const SearchIcon = styled.img`
    width: 20px;
    height: 20px;
    position: absolute;
    right: 14px;
  `

  return (
    <Container>
      <NotSelected>Dados Cadastrais</NotSelected>
      <Selected>Prontuário</Selected>
      <SearchBar>
        <SearchText> O que você está procurando?</SearchText>
        <SearchIcon src=".\.\src\images\searchIcon.svg" />
      </SearchBar>
    </Container>
  )
}

export default Header
