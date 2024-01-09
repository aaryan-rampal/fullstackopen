const Header = (props) => {
	console.log("reached header " + props.course.name)

	return (
		<div>
			<h1>{props.course.name}</h1>
		</div>
	)
}

const Part = (props) => {
	// console.log("in parts: " + props)

	return (
		<>
			<p>
				{props.name} {props.exercises}
			</p>
		</>
	)
}

const Content = (props) => {
	console.log('reached content ' + JSON.stringify(props))
	const course = props.course
	const parts = course.parts

	return (
		<>
			<Part name={parts[0].name} exercises={parts[0].exercises} />
			<Part name={parts[1].name} exercises={parts[1].exercises} />
			<Part name={parts[2].name} exercises={parts[2].exercises} />
		</>
	)
}

const Total = (props) => {
	console.log('reached total ' + JSON.stringify(props))
	const course = props.course
	const parts = course.parts
	const arr = parts.map(value => value.exercises)
	console.log(arr)

	return (
		<>
			<p>Number of exercises {arr[0] + arr[1] + arr[2]}</p>
		</>
	)
}

const App = () => {
	// const course = 'Half Stack application development'
	// const part1 = {
	// 	name: 'Fundamentals of React',
	// 	exercises: 10
	// }
	// const part2 = {
	// 	name: 'Using props to pass data',
	// 	exercises: 7
	// }
	// const part3 = {
	// 	name: 'State of a component',
	// 	exercises: 14
	// }

	// const parts = [part1, part2, part3]
	// const parts = [
	// 	{
	// 		name: 'Fundamentals of React',
	// 		exercises: 10
	// 	},
	// 	{
	// 		name: 'Using props to pass data',
	// 		exercises: 7
	// 	},
	// 	{
	// 		name: 'State of a component',
	// 		exercises: 14
	// 	}
	// ]
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10
			},
			{
				name: 'Using props to pass data',
				exercises: 7
			},
			{
				name: 'State of a component',
				exercises: 14
			}
		]
	}


	return (
		<div>
			<Header course={course} />
			<Content course={course} />
			<Total course={course} />
		</div>
	)
}

export default App