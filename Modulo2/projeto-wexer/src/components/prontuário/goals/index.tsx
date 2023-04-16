import styled from 'styled-components'
import ModalContainer from '../modals'
import * as React from 'react'
import TextEditor from '../modals/textEditor'

function Goals() {
  const [open, setOpen] = React.useState(false)
  const handleClose = () => setOpen(false)
  const [demands, setdemands] = React.useState('')

  React.useEffect(() => {
    fetch('https://wexer-example-backend.vercel.app/api/patient/64348d31d1f55efc1d6dcdda', {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2MwNjVkNTZlYjNmZGZkZDg1YjIyZSIsIm5hbWUiOiJHYWJyaWVsIEFtYXJhbCIsImVtYWlsIjoiZ2FicmllbGFtYXJhbEBhcm5pYS5jb20iLCJpYXQiOjE2ODE2NTU0NzksImV4cCI6MTY4MTc0MTg3OX0.eXCMfO0s3eLODfpjRO8O3qvTB-H_nwucBhCHPoO32HU',
        'x-api-key': '1e7977ea-d97e-11ed-afa1-0242ac120002',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setdemands(data.demands))
      .catch(error => console.error('Error fetching name:', error))
  }, [])

  const Card = styled.div`
    width: 339px;
    height: 226px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    position: relative;
  `
  const Title = styled.div`
    position: absolute;
    width: 204px;
    height: 22px;
    left: 24px;
    top: 24px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #212121;
  `
  const EditIcon = styled.img`
    position: absolute;
    right: 16px;
    top: 24px;
  `

  const Content = styled.div`
    position: absolute;
    width: 288px;
    height: 135px;
    left: 24px;
    top: 70px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #424242;
  `

  return (
    <Card>
      <ModalContainer
        Conteudo={TextEditor}
        height="473px"
        title="Demandas e objetivos"
        onClose={handleClose}
        isOpen={open}
      />
      <Title>Demandas e objetivos</Title>
      <EditIcon src="src\images\editIcon.svg" onClick={() => setOpen(true)} />
      <Content>{demands}</Content>
    </Card>
  )
}

export default Goals
