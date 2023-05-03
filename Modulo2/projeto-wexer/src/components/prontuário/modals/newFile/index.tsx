import styled from 'styled-components'
import React, { useState } from 'react'

interface Payment {
  value: number
  method: string
  status: string
}

interface FormData {
  timelineId: string
  payment: Payment
  title: string
  content: string
  type: string
  createdOn: string
  hour: string
}

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
const FileInput = styled.input`
  appearance: none;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  width: 0;
  height: 0;
  overflow: hidden;
  position: absolute;
`
const FileInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  margin-left: 32px;
  height: 80px;
`

const FileInputLabel = styled.label`
  padding: 8px;
  width: 135px;
  height: 34px;
  width: 135px;
  height: 34px;
  background: #2f80ed;
  border-radius: 8px;
  color: #ffffff;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  align-items: center;
  letter-spacing: 0.2px;
  display: flex;
`
const Footer = styled.div`
  width: 642px;
  height: 97px;
  left: 0px;
  bottom: -120px;
  background: #ffffff;
  border-top: 2px solid #e0e0e0;
  border-radius: 0px 0px 8px 8px;
  position: absolute;
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #616161;
  justify-content: flex-end;
  gap: 24px;
`

const SaveButton = styled.div`
  background: #00995d;
  border-radius: 24px;
  width: 147px;
  height: 48px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 48px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin-right: 32px;
  cursor: pointer;
`
const Cancel = styled.span`
  cursor: pointer;
`

export default function NewFile() {
  const [formData, setFormData] = useState<FormData>({
    timelineId: '643dc6a38df02c8bf2aab8f4',

    payment: {
      value: 0,
      method: '',
      status: ''
    },
    title: '',
    content: '',
    type: 'attachment',
    createdOn: '',
    hour: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    if (name !== 'value' && name !== 'method' && name !== 'status') {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }))
    } else {
      setFormData(prevFormData => ({
        ...prevFormData,
        payment: {
          ...prevFormData.payment,
          [name]: value
        }
      }))
    }
  }

  const handleSubmit = () => {
    fetch('https://wexer-example-backend.vercel.app/api/occurrence', {
      method: 'POST',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2MwNjVkNTZlYjNmZGZkZDg1YjIyZSIsIm5hbWUiOiJHYWJyaWVsIEFtYXJhbCIsImVtYWlsIjoiZ2FicmllbGFtYXJhbEBhcm5pYS5jb20iLCJpYXQiOjE2ODMxMzE0OTQsImV4cCI6MTY4MzIxNzg5NH0.uOogKxREwi5wjifKLUNY6nysvIYwdF6O3Qwrm4KjPjY',

        'x-api-key': '1e7977ea-d97e-11ed-afa1-0242ac120002',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(() => {
        window.location.reload()
      })
      .catch(error => console.error(error))
  }

  return (
    <Container>
      <SideContainer>
        <InputContainer>
          <Label htmlFor="date">Data:*</Label>
          <InputLittle
            id="date"
            name="createdOn"
            type="date"
            defaultValue={formData.createdOn}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="date">Título:*</Label>
          <InputMedium name="title" type="text" value={formData.title} onChange={handleChange} />
        </InputContainer>
      </SideContainer>
      <InputContainer>
        <Label htmlFor="description">Descrição:*</Label>
        <InputLarge name="content" value={formData.content} onChange={handleChange} />
        <FileInputContainer>
          <span>Anexar arquivos*</span>
          <FileInputLabel htmlFor="fileInput">Escolha um arquivo</FileInputLabel>
          <FileInput id="fileInput" type="file" />
        </FileInputContainer>
      </InputContainer>
      <Footer>
        <Cancel>Cancelar</Cancel>
        <SaveButton onClick={handleSubmit}> Criar</SaveButton>{' '}
      </Footer>
    </Container>
  )
}
