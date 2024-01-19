import { useState } from 'react'

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const Header = ({ good, neutral, bad }) => {
  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={good} text='good'></Button>
      <Button onClick={neutral} text='neutral'></Button>
      <Button onClick={bad} text='bad'></Button>
    </div>
  )
}

const StatisticLine = ({ name, amt }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{amt}</td>
    </tr>
  )
}


const Footer = ({ good, neutral, bad }) => {
  const computeAverage = () => {
    let net = good - bad
    return net / (good + bad + neutral)
  }

  const computePositive = () => {
    return 100 * good / (good + neutral + bad) + '%'
  }

  // this only works since good, neutral, and bad are positive values
  if (good + neutral + bad == 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticLine name='good' amt={good}></StatisticLine>
            <StatisticLine name='neutral' amt={neutral}></StatisticLine>
            <StatisticLine name='bad' amt={bad}></StatisticLine>
            <StatisticLine name='all' amt={good + neutral + bad}></StatisticLine>
            <StatisticLine name='average' amt={computeAverage()}></StatisticLine>
            <StatisticLine name='positive' amt={computePositive()}></StatisticLine>
          </tbody>
        </table>
      </div>
    )
  }

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    // console.log('good button pressed')
    // console.log('old good', good)
    setGood(good + 1);
    // console.log('new good', good)

  }
  const handleBad = () => setBad(bad + 1)
  const handleNeutral = () => setNeutral(neutral + 1)

  return (
    <div>
      <Header good={handleGood} bad={handleBad} neutral={handleNeutral} />
      <Footer good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App