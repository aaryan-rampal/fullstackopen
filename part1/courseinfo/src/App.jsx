const Header = (props) => {
	console.log("header title is" + props.title)

	return (
		<div>
			<h1>{props.title}</h1>
		</div>
	)
}

const Part = (props) => {
	console.log("in parts: " + props)

	return (
		<>
			<p>
				{props.name} {props.exercises}
			</p>
		</>
	)
}

const Content = (props) => {
	return (
		<>
			<Part name={props.nameOne} exercises={props.exOne} />
			<Part name={props.nameTwo} exercises={props.exTwo} />
			<Part name={props.nameThree} exercises={props.exThree} />
		</>
	)
}

const Total = (props) => {
	const arr = props.exercises
	console.log(arr)

	return (
		<>
			<p>Number of exercises {arr[0] + arr[1] + arr[2]}</p>
		</>
	)
}

const App = () => {
	const course = 'Half Stack application development'
	const part1 = 'Fundamentals of React'
	const exercises1 = 10
	const part2 = 'Using props to pass data'
	const exercises2 = 7
	const part3 = 'State of a component'
	const exercises3 = 14

	const exercises = [exercises1, exercises2, exercises3];

	return (
		<div>
			<Header title={course} />
			<Content nameOne={part1} exOne={exercises1}
				nameTwo={part2} exTwo={exercises2}
				nameThree={part3} exThree={exercises3} />
			<Total exercises={exercises} />
		</div>
	)
}

export default App