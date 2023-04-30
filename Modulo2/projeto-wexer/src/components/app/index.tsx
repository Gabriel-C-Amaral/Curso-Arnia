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
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2MwNjVkNTZlYjNmZGZkZDg1YjIyZSIsIm5hbWUiOiJHYWJyaWVsIEFtYXJhbCIsImVtYWlsIjoiZ2FicmllbGFtYXJhbEBhcm5pYS5jb20iLCJpYXQiOjE2ODI3ODk5NDIsImV4cCI6MTY4Mjg3NjM0Mn0.nvxkynstfyYfYATk53PPc16ZZ9u4Fg63GIaKcBhr0IA',

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
          <Route path="/avaluation" element={<AvaluationPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
