import styled from 'styled-components'

type button = {
  textColor: string
  filled: string
  icon?: string
  border: string
  text: string
}

function PrimaryBtn(buttonprop: button) {
  const Button = styled.button`
    background: ${buttonprop.filled};
    border: 1px solid ${buttonprop.border};
    color: ${buttonprop.textColor};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 17px 64px;
    gap: 10px;
    width: 190px;
    height: 54px;
    border-radius: 100px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  `

  return (
    <div>
      <Button>
        <img src={buttonprop.icon} width="20px" height="20px" />
        {buttonprop.text}
      </Button>
    </div>
  )
}

export default PrimaryBtn
