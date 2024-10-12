import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import User from './User'
import Friends from './Friends'
import Friend from './Friend'


function App() {
 function handleClick(){
  alert('button clicked')
 }

  return (
    <>
      <h3>React Core Concept</h3>
      <User></User>
      <Friends></Friends>
      {/* <Friend></Friend> */}


      <Counter></Counter>
      <button onClick={handleClick}>click Me</button>
      <br />
      <button onClick={handleClick}>click Me 2</button>
      <button onClick={()=>{alert('Third Click')}}>click Me 2</button>
    </>
  )
}

export default App
