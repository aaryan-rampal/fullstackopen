import { useState } from 'react'

// const Hello = ({ name, age }) => {
// 	// const name = props.name
// 	// const age = props.age
// 	// const {name, age} = props

// 	const bornYear = () => new Date().getFullYear() - age

// 	return (
// 		<div>
// 			<p>
// 				Hello {name}, you are {age} years old
// 			</p>
// 			<p>
// 				So you were probably born in {bornYear()}
// 			</p>
// 		</div>
// 	)
// }

// const Display = (props) => {
// 	return (
// 		<div>{props.counter}</div>
// 	)
// }

const History = ({ allClicks, total }) => {
  if (allClicks.length == 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  } else {
    return (
      <div>
        <p>{allClicks.join(' ')}</p>
        <p>Total clicks: {total}</p>
      </div>
    )
  }
}

// const Display = ({ counter }) => <div>{counter}</div>
const Display = props => <div>props.value</div>

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  // const [test, setTest] = useState("hello")
  const [value, setValue] = useState(10)

  const hello = (who) => () => {
    // const handler = () => console.log('hello', who)
    // return handler
    console.log('hello', who)
  }

  const setToValue = (newVal) => () => {
    console.log('value now', newVal)
    setValue(newVal)
  }

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
    setTotal(total + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(total + 1)
  }

  const handleResetClick = () => {
    setAll([])
    setRight(0)
    setLeft(0)
    setTotal(0)
  }


  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}
      <br />
      <Button onClick={handleResetClick} text='reset'></Button>
      <History allClicks={allClicks} total={total}></History>
      <br/>
      <Button onClick={hello('world')} text='world'></Button>
      <Button onClick={hello('react')} text='react'></Button>
      <Button onClick={hello('aaryan')} text='aaryan'></Button>
      <br/>
      <Button onClick={setToValue(1000)} text='thousand'></Button>
      <Button onClick={setToValue(0)} text='reset'></Button>
      <button onClick={setToValue(value+1)}>increment to {value+1}</button>
    </div>
  )
}

export default App
