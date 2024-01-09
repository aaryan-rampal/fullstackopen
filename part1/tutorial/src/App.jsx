// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

const Hello = (props) => {
	console.log(props)
	return (
		<div>
			<p>Hello {props.name}. You are {props.age} years old!</p>
		</div>
	)
}

const Footer = () => {
  return (
    <>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </>
  )
}

const App = () => {
	const name = "Peter"
	const age = 10
	const friends = [
		{ name: "peter", age: 4},
		{ name: "maya", age: 8 },
	]
	const names = friends.map(friend => friend.name)

  return (
    // <div>
	<> {/* <h1>Greetings</h1>
		<Hello name={name} age={age}/>
		<Hello name="Maya" age={100/2}/>
		<Footer></Footer> */}

		<p>{friends[0].name} {friends[0].age}</p>
		<p>{friends[1].name} {friends[1].age}</p>
		<p>{names}</p>

	</>
    // </div>
  )
}

export default App