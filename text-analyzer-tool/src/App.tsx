import { useEffect, useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { pronouns } from './data/pronouns'

const App = () => {
  const [text, setText] = useState<string>('')
  const [textInfo, setTextInfo] = useState({
    words: 0,
    char: 0,
    sen: 0,
    para: 0,
    pron: 0,
    avr: '-',
    longestWord: '-',
  })

  function longer(champ: string, contender: string) {
    return contender.length > champ.length ? contender : champ
  }

  function longestWord(str: string) {
    var words = str.split(' ')
    return words.reduce(longer)
  }

  useEffect(() => {
    const sentence: number = text.split('.').length - 1 + text.split('!').length
    const char = text.length
    const words = text.split(' ').length
    let pron = 0
    for (let i = 0; i < pronouns.length; i++) {
      pron += text.split(' ').filter((item) => item === pronouns[i]).length
    }
    setTextInfo({
      ...textInfo,
      sen: sentence,
      char: char,
      words: words,
      pron: pron,
      para: text.split('\n').filter((para) => !!para).length,
      avr: (words / 225).toFixed(),
      longestWord: longestWord(text),
    })
  }, [text])

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox textInfo={textInfo} />
          <TextArea text={text} setText={setText} />
          <BottomResultBox avg={textInfo.avr} longest={textInfo.longestWord} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
