import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import styled from 'styled-components'

type PropEditor = {
  default: string
  name: string
}

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

const TextEditor = (prop: PropEditor) => {
  const [editorHtml, setEditorHtml] = useState(prop.default)

  // eslint-disable-next-line no-console
  console.log(editorHtml)

  const handleSubmit = () => {
    const endpoint = 'https://wexer-example-backend.vercel.app/api/patient/64348d31d1f55efc1d6dcdda'

    const requestBody = {
      [prop.name]: editorHtml.replace(/<\/?p>/g, '')
    }

    fetch(endpoint, {
      method: 'PUT',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2MwNjVkNTZlYjNmZGZkZDg1YjIyZSIsIm5hbWUiOiJHYWJyaWVsIEFtYXJhbCIsImVtYWlsIjoiZ2FicmllbGFtYXJhbEBhcm5pYS5jb20iLCJpYXQiOjE2ODMzNzYyMzcsImV4cCI6MTY4MzQ2MjYzN30.LnSi6Et38luT5IRgjIFcLgJiQl3Y_S2bHzY7UBsK_A8',
        'x-api-key': '1e7977ea-d97e-11ed-afa1-0242ac120002',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => response.json())
      .then(() => {
        window.location.reload()
      })
      .catch(error => console.error('Error fetching data:', error))
  }

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link']
    ],
    clipboard: {
      matchVisual: false
    }
  }

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video'
  ]

  const handleEditorChange = (html: string) => {
    setEditorHtml(html)
  }

  return (
    <div>
      <ReactQuill theme="snow" modules={modules} formats={formats} value={editorHtml} onChange={handleEditorChange} />
      <Footer>
        <Cancel>Cancelar</Cancel>
        <SaveButton onClick={handleSubmit}> Editar</SaveButton>{' '}
      </Footer>
    </div>
  )
}

export default TextEditor
