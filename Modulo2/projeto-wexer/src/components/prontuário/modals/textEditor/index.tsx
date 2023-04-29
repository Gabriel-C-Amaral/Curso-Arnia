import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

type PropEditor = {
  default: string
}

const TextEditor = (prop: PropEditor) => {
  const [editorHtml, setEditorHtml] = useState(prop.default)

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
    <ReactQuill
      theme="snow"
      modules={modules}
      formats={formats}
      defaultValue={prop.default}
      value={editorHtml}
      onChange={handleEditorChange}
    />
  )
}

export default TextEditor
