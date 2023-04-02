import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const TextEditor = () => {
  const [editorHtml, setEditorHtml] = useState('')

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

  const handleEditorChange = html => {
    setEditorHtml(html)
  }

  return (
    <ReactQuill theme="snow" modules={modules} formats={formats} value={editorHtml} onChange={handleEditorChange} />
  )
}

export default TextEditor
