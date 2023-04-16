import Identity from '../prontuário/identity'
import styled from 'styled-components'
import Header from './header'
import Goals from './goals'
import Anotations from './anotations'
import HeadMenu from './headmenu'
import TimelineContainer from './timeline'
import React, { useState, useEffect } from 'react'

interface PatientData {
  _id: string
  userId: string
  name: string
  birthdate: string
  profession: string
  schooling: string
  demands: string
  personalAnnotations: string
}
function formatDateToDDMMYYYY(dateString: string) {
  const date = new Date(dateString)
  const day = String(date.getUTCDate()).padStart(2, '0')
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const year = String(date.getUTCFullYear())
  return `${day}/${month}/${year}`
}

function Prontuário() {
  const [apiData, setapiData] = useState({} as PatientData)

  useEffect(() => {
    fetch('https://wexer-example-backend.vercel.app/api/patient/64348d31d1f55efc1d6dcdda', {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2MwNjVkNTZlYjNmZGZkZDg1YjIyZSIsIm5hbWUiOiJHYWJyaWVsIEFtYXJhbCIsImVtYWlsIjoiZ2FicmllbGFtYXJhbEBhcm5pYS5jb20iLCJpYXQiOjE2ODE2NTU0NzksImV4cCI6MTY4MTc0MTg3OX0.eXCMfO0s3eLODfpjRO8O3qvTB-H_nwucBhCHPoO32HU',
        'x-api-key': '1e7977ea-d97e-11ed-afa1-0242ac120002',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setapiData(data))
      .catch(error => console.error('Error fetching name:', error))
  }, [])
  const Container = styled.div`
    display: flex;
    width: calc(100% - 80px);
    height: calc(100% - 80px);
    position: relative;
    top: 100px;
    left: 138px;
    flex-direction: column;
    gap: 24px;
  `
  const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
    width: 340px;
  `

  const CentralContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 924px;
  `

  const MainContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
  `

  return (
    <Container>
      <Header />
      <MainContainer>
        <SideContainer>
          <Identity
            name={apiData.name}
            birthday={formatDateToDDMMYYYY(apiData.birthdate)}
            occupation={apiData.profession}
            education={apiData.schooling}
          />
          <Goals />
          <Anotations />
        </SideContainer>
        <CentralContainer>
          <HeadMenu />
          <TimelineContainer />
        </CentralContainer>
      </MainContainer>
    </Container>
  )
}

export default Prontuário
