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

const Display = ({counter}) => <div>{counter}</div>

// const Button = ({text, onClick}) => {
// 	return (
// 		<button onClick={onClick}>
// 			{text}
// 		</button>
// 	)
// }

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const App = (props) => {
	const [counter, setCounter] = useState(0)
	console.log('rendering with counter value', counter)


	// setTimeout(
	// 	() => setCounter(counter - 1),
	// 	1000
	// )

		
	const increment = () => {
		setCounter(counter + 1)
		console.log('incrementing')
	}
	const decrement = () => {
		setCounter(counter - 1)
		console.log('decrementing')
	}
	const reset = () => {
		setCounter(0)
		console.log('resetting')
	}


	return (
		<div>
			<Display counter={counter}/>
			<Button onClick={increment} text='plus'/>
			<Button onClick={decrement} text='minus'/>
			<Button onClick={reset} text='reset'/>
		</div>
	)
}

export default App
