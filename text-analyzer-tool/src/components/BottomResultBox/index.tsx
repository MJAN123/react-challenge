import './index.scss'

type BottomResultBoxProps = {
  avg: string
  longest: string
}
const BottomResultBox = ({ avg, longest }: BottomResultBoxProps) => {
  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: avg,
    },
    {
      title: 'Longest word:',
      value: longest,
    },
  ]

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
