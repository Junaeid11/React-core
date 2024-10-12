import React, { useState } from 'react'

export default function Counter() {
 const handelAdd = ()=>{
    const newCount = count +1;
    setCount(newCount)

 }
 const handelRemove = ()=>{
    const newCount = count -1;
    setCount(newCount)

 }
    const [count, setCount]=useState(0)
  return (
    <div>
        <h3>Counter : {count}</h3>
        <button onClick={handelAdd}>Add</button>
        <button onClick={handelRemove}>remove</button>
    </div>
  )
}
