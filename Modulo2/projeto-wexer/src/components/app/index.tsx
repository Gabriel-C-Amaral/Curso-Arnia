import { Normalize } from 'styled-normalize'
import './styles.css'
import HeaderMenu from '../header-sidemenu'
// import Prontuário from '../prontuário'
import AvaluationPage from '../avaluation'
import React, { useEffect, useState } from 'react'

function App() {
  const [name, setName] = useState('')

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
      .then(data => setName(data.name))
      .catch(error => console.error('Error fetching name:', error))
  }, [])

  return (
    <div className="App">
      <Normalize />
      <HeaderMenu name={name} />
      {/* <Prontuário /> */}
      <AvaluationPage />
    </div>
  )
}

export default App
