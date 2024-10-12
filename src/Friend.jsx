import React from 'react'

export default function Friend({friend}) {
    const {name, email} = friend
  return (
    <div>
        <h3>Name :{name}</h3>
        <h4>Email :{email}</h4>
    </div>
  )
}
