import React from 'react'
import { useSelector } from 'react-redux'
export default function Home() {
  const {currentUser} = useSelector(state => state.user)
  const {counter} = useSelector(state => state.counter)
  return(
    <div>
      <h1>Home</h1>
      <h2>Welcome {currentUser.firstName}</h2>
      <h2>Counter: {counter}</h2>
    </div>
  )
}