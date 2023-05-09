import { Normalize } from 'styled-normalize'
import './styles.css'
import HeaderMenu from '../header-sidemenu'
import Prontuário from '../prontuário'
import AvaluationPage from '../avaluation'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [name, setName] = useState('')

  useEffect(() => {
    fetch('https://wexer-example-backend.vercel.app/api/patient/64348d31d1f55efc1d6dcdda', {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2MwNjVkNTZlYjNmZGZkZDg1YjIyZSIsIm5hbWUiOiJHYWJyaWVsIEFtYXJhbCIsImVtYWlsIjoiZ2FicmllbGFtYXJhbEBhcm5pYS5jb20iLCJpYXQiOjE2ODM2NzI3NTUsImV4cCI6MTY4Mzc1OTE1NX0.W30GVvRCIqAY7K4GgJNKCnTzOKQw42iZdc3SWBPd50w',

        'x-api-key': '1e7977ea-d97e-11ed-afa1-0242ac120002',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setName(data.name))
      .catch(error => console.error('Error fetching name:', error))
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Normalize />
        <HeaderMenu name={name} />
        <Routes>
          <Route path="/" element={<Prontuário />} />
          <Route path="/avaluation" element={<AvaluationPage step="step1" />} />
          <Route path="/avaluationstep2" element={<AvaluationPage step="step2" />} />
          <Route path="/avaluationstep3" element={<AvaluationPage step="step3" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
