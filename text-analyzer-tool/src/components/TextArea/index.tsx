import React from 'react'
import './index.scss'

type TextAreaProps = {
  text: string
  setText: (text: string) => void
}

const TextArea = ({ text, setText }: TextAreaProps) => {
  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      autoFocus
      className="text-area"
      placeholder="Paste your text here..."
    />
  )
}

export default TextArea
