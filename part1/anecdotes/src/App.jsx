import { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>


const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]

const Anecdote = ({ selected, votes }) => {
  return (
    <div>
      {anecdotes[selected]}
      <p>has {votes} votes</p>
    </div>
  )
}

const Top = ({vote}) => {
  const maxValue = Math.max(...vote)
  const maxIndex = vote.indexOf(maxValue)

  if (maxValue == 0) {
    return (
      <div>
      <h1>Anecdote with most votes</h1>
      <p>No voting has ocurred yet.</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <Anecdote selected={maxIndex} votes={vote[maxIndex]}/>
    </div>
  )

}

const App = () => {

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
  }

  const changeAnecdote = () => {
    let i = getRandomInt(anecdotes.length)
    setSelected(i)
  }

  const addVote = () => {
    const copy = [...vote]
    copy[selected]++
    setVote(copy) 
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote selected={selected} votes={vote[selected]}/>
      <br />
      <Button handleClick={addVote} text='vote' />
      <Button handleClick={changeAnecdote} text='next anecdote' />
      <Top vote={vote}/>
    </div>
  )
}

export default App