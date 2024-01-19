import { useState } from 'react'

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const Header = ({good, neutral, bad}) => {
  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={good} text='good'></Button>
      <Button onClick={neutral} text='neutral'></Button>
      <Button onClick={bad} text='bad'></Button>
  </div>
  )
}

const Stat = ({name, amt}) => {
  return (
      <p>{name}: {amt}</p>
  )
}


const Footer = ({good, neutral, bad}) => {
  const computeAverage = () => {
    // this only works since good, neutral, and bad are positive values
    if (good + neutral + bad == 0) return 'no reviews yet'
    let net = good - bad 
    return net / (good+bad+neutral)
  }

  const computePositive = () => {
    if (good + neutral + bad == 0) return 'no reviews yet'
    return 100 * good / (good+neutral+bad) + '%'
  }

  return (
    <div>
      <h2>Statistics</h2>
      <Stat name='good' amt={good}></Stat>
      <Stat name='neutral' amt={neutral}></Stat>
      <Stat name='bad' amt={bad}></Stat>
      <Stat name='all' amt={good + neutral + bad}></Stat>
      <Stat name='average' amt={computeAverage()}></Stat>
      <Stat name='positive' amt={computePositive()}></Stat>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    // console.log('good button pressed')
    // console.log('old good', good)
    setGood(good+1);
    // console.log('new good', good)

  }
  const handleBad = () => setBad(bad + 1)
  const handleNeutral = () => setNeutral(neutral + 1)

  return (
    <div>
      <Header good={handleGood} bad={handleBad} neutral={handleNeutral}/>
      <Footer good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App