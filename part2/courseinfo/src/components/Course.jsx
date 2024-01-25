const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
  <>
    {parts.map(part => <Part key={part.id} part={part}></Part>)}
  </>

const Sum = ({ sum }) =>
  <>
    <p><strong>total of {sum} exercises</strong></p>
  </>

const Course = ({ course }) => {
  const sum = course.parts.map(part => part.exercises).reduce((a, b) => a + b, 0)
  console.log(course.parts.map(part => part.exercises).reduce((a, b) => a + b, 0))

  return (
    <>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Sum sum={sum}></Sum>
    </>
  )
}

export default Course