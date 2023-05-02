import styled from 'styled-components'
import React, { useState, useEffect } from 'react'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 456px;
  width: 640px;
  overflow-y: scroll;
  margin-bottom: 10px;
`
const Title = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  display: flex;
  align-items: center;
  color: #212121;
  top: 0px;
  position: relative;
  width: 100%;
  height: 32px;
  margin-bottom: 16px;
`

const Number = styled.div`
  width: 32px;
  height: 32px;
  background-color: #00995d;
  border-radius: 16px;
  text-align: center;
  justify-content: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  color: #ffffff;
  margin-left: 44px;
  margin-right: 21px;
`

const InputLittle = styled.input`
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  box-sizing: border-box;
  height: 48px;
  width: 182px;
  position: relative;
  margin-top: 8px;
  margin-left: 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
`
const InputMedium = styled.input`
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  box-sizing: border-box;
  height: 48px;
  width: 590px;
  position: relative;
  margin-top: 8px;
  margin-left: 16px;
  margin-bottom: 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  padding-left: 8px;
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
  justify-content: space-between;
  align-items: flex-start;
  margin-right: 16px;
`

const Divisor = styled.div`
  position: relative;
  width: 590px;
  height: 2px;
  background-color: #eeeeee;
  margin-top: 24px;
  left: 16px;
  margin-bottom: 25px;
`

const Selector = styled.select`
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  box-sizing: border-box;
  height: 48px;
  width: 182px;
  position: relative;
  margin-top: 8px;
  margin-left: 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
`
const RadioDiv = styled.div`
  height: 48px;
  display: flex;
  box-sizing: border-box;
  width: 182px;
  position: relative;
  margin-top: 8px;
  margin-left: 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 16px;
  text-align: center;
  align-items: center;
  justify-content: space-around;
`
const Footer = styled.div`
  width: 642px;
  height: 97px;
  left: 0px;
  bottom: -97px;
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

// interface Payment {
//   value: number
//   method: string
//   status: string
// }

// interface FormData {
//   timelineId: string
//   payment: Payment
//   title: string
//   content: string
//   type: string
//   date: string
//   hour: string
// }

type EditProp = {
  editId: string
  type?: string
}

interface Service {
  timeline: {
    _id?: string
    patientId?: string
    occurrences: Occurrence[]
    serviceName?: string
    createdOn?: string
    modifiedOn?: string
  }
}

interface Occurrence {
  payment: {
    value: number
    method: string
    status: string
  }
  _id: string
  title: string
  content: string
  files?: string[]
  type: string
  createdOn: string
  modifiedOn?: string
}

export default function EditSession(prop: EditProp) {
  const [apiData, setApiData] = useState<Service>({ timeline: { occurrences: [] } })
  const [currentDate, setcurrentDate] = useState('')
  const [currentHour, setcurrentHour] = useState('')

  const [formData, setFormData] = useState<Occurrence>({
    payment: {
      value: 0,
      method: '',
      status: ''
    },
    title: '',
    content: '',
    type: 'session',
    createdOn: '',
    modifiedOn: '',
    _id: ''
  })

  const DatetoDate = (dateApi: string) => {
    const date = new Date(dateApi)
    setcurrentDate(date.toISOString().substring(0, 10))
    setcurrentHour(date.toISOString().substring(11, 16))
  }

  useEffect(() => {
    fetch(`https://wexer-example-backend.vercel.app/api/timeline/643dc6a38df02c8bf2aab8f4`, {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2MwNjVkNTZlYjNmZGZkZDg1YjIyZSIsIm5hbWUiOiJHYWJyaWVsIEFtYXJhbCIsImVtYWlsIjoiZ2FicmllbGFtYXJhbEBhcm5pYS5jb20iLCJpYXQiOjE2ODMwMzI5NTksImV4cCI6MTY4MzExOTM1OX0.IwP3OE-Hj9gLtLXs54hW53p_rqs3-wnT9xS43yVQxbY',

        'x-api-key': '1e7977ea-d97e-11ed-afa1-0242ac120002',

        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setApiData(data)
        // eslint-disable-next-line no-console
        console.log(data)
      })
      .catch(error => console.error('Error fetching name:', error))
  }, [])

  useEffect(() => {
    const filteredData = apiData.timeline.occurrences?.filter(occurrence => occurrence._id === prop.editId)
    if (filteredData && filteredData.length > 0) {
      setFormData(filteredData[0])
      DatetoDate(filteredData[0].createdOn)
    }
  }, [apiData, prop.editId])

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
    fetch(`https://wexer-example-backend.vercel.app/api/timeline/6438810edc67c006c954c71f/occurrence/${prop.editId}`, {
      method: 'PUT',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2MwNjVkNTZlYjNmZGZkZDg1YjIyZSIsIm5hbWUiOiJHYWJyaWVsIEFtYXJhbCIsImVtYWlsIjoiZ2FicmllbGFtYXJhbEBhcm5pYS5jb20iLCJpYXQiOjE2ODMwMzI5NTksImV4cCI6MTY4MzExOTM1OX0.IwP3OE-Hj9gLtLXs54hW53p_rqs3-wnT9xS43yVQxbY',

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
      <form>
        <Title>
          <Number>1</Number> Dados Gerais
        </Title>
        <InputContainer>
          <div>
            <Label htmlFor="date">Data:*</Label>
            <InputLittle id="date" name="date" type="date" defaultValue={currentDate} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="start">Hora de Inicio:*</Label>
            <InputLittle id="start" name="hour" defaultValue={currentHour} type="time" onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="end">Hora fim*</Label>
            <InputLittle id="end" type="time" />
          </div>
        </InputContainer>
        <div>
          <Divisor />
        </div>
        <Title>
          <Number>2</Number> Sessão
        </Title>
        <div>
          <Label>Titulo*</Label>
          <InputMedium name="title" type="text" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <Label>Resumo da sessão*</Label>
          <InputLarge name="content" value={formData.content} onChange={handleChange} />
        </div>
        <div>
          <Divisor />
        </div>
        <Title>
          <Number>3</Number>Pagamento
        </Title>
        <InputContainer>
          <div>
            <Label htmlFor="price">Valor</Label>
            <InputLittle
              name="value"
              defaultValue={formData.payment.value}
              id="price"
              type="number"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="payment">Forma de Pagamento</Label>
            <Selector name="method" id="method" defaultValue={formData.payment.method} onChange={handleChange}>
              <option value="pix">Pix</option>
              <option value="credito">Cartão de Crédito</option>
              <option value="debito">Cartão de Débito</option>
              <option value="Dinheiro">Dinheiro</option>
            </Selector>
          </div>
          <div>
            <Label htmlFor="paid">Status</Label>
            <RadioDiv>
              <input type="radio" id="paid" name="status" defaultValue="paid" onChange={handleChange} />
              <label htmlFor="paid">Pago</label>

              <input type="radio" id="notpaid" name="status" defaultValue="notpaid" onChange={handleChange} />
              <label htmlFor="notpaid">Não pago</label>
            </RadioDiv>
          </div>
        </InputContainer>
      </form>
      <Footer>
        <Cancel>Cancelar</Cancel>
        <SaveButton onClick={handleSubmit}> Editar</SaveButton>{' '}
      </Footer>
    </Container>
  )
}
