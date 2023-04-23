import styled from 'styled-components'
import DivisorFilter from './divisorFilter'
import Sessao from './sessao'
import React, { useState, useEffect } from 'react'

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
  payment?: {
    value?: number
    method?: string
    status?: string
  }
  _id?: string
  title: string
  content: string
  files?: string[]
  type: string
  createdOn: string
  modifiedOn?: string
}

function TimelineContainer() {
  const [apiData, setApiData] = useState<Service>({ timeline: { occurrences: [] } })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://wexer-example-backend.vercel.app/api/timeline/643dc6a38df02c8bf2aab8f4', {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2MwNjVkNTZlYjNmZGZkZDg1YjIyZSIsIm5hbWUiOiJHYWJyaWVsIEFtYXJhbCIsImVtYWlsIjoiZ2FicmllbGFtYXJhbEBhcm5pYS5jb20iLCJpYXQiOjE2ODIyNzcxNzYsImV4cCI6MTY4MjM2MzU3Nn0.JvZuF_h_yvuIv6oeuXAH2iP8AagIiE21HVliWlKJuqQ',
        'x-api-key': '1e7977ea-d97e-11ed-afa1-0242ac120002',

        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setApiData(data)
        setLoading(false)
      })
      .catch(error => console.error('Error fetching name:', error))
  }, [])

  const Container = styled.div`
    width: 924px;
    height: fit-content;
    position: relative;
    flex-direction: column;
  `

  return (
    <Container>
      <DivisorFilter />
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          apiData.timeline.occurrences?.map((occurrence, index) => (
            <Sessao
              title={occurrence.title}
              key={index}
              position={index + 1}
              card={occurrence.type}
              date={occurrence.createdOn}
              text={occurrence.content}
            />
          ))
        )}
      </div>
    </Container>
  )
}

export default TimelineContainer
