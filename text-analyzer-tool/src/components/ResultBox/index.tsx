import { text } from 'stream/consumers'
import './index.scss'

type ResultBoxProps = {
  textInfo: {
    words: number
    char: number
    sen: number
    para: number
    pron: number
  }
}
const ResultBox = ({ textInfo }: ResultBoxProps) => {
  const resultBar = [
    {
      title: 'Words',
      value: textInfo.words,
    },
    {
      title: 'Characters',
      value: textInfo.char,
    },
    {
      title: 'Sentences',
      value: textInfo.sen,
    },
    {
      title: 'Paragraphs ',
      value: textInfo.para,
    },
    {
      title: 'Pronouns',
      value: textInfo.pron,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
