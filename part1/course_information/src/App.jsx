import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Header = ({course}) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  )
}
const Part = ({part, exercise}) => {
  return (
    <>
    <p>
      {part} {exercise}
    </p>
    </>
  )
}
const Content = (props) => {
  return (
    <>
      <Part part={props.part1} exercise={props.exercise1} />
      <Part part={props.part2} exercise={props.exercise2} />
      <Part part={props.part3} exercise={props.exercise3} />
      
    </>
  )
}
const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
    </>
  )
}

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14
 
  return (
    <>
      <Header course={course}/>
      <Content part1={part1} exercise1={exercise1} part2={part2} exercise2={exercise2}
      part3={part3} exercise3={exercise3}/>
      <Total exercise1={exercise1} exercise2={exercise2} exercise3={exercise3}/>
    </>
  )
}

export default App
