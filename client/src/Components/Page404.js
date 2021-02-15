import React from 'react'
import { useNavigate } from 'react-router'

export default function Page404() {
  const navigate = useNavigate()
  return (
    <div className='page-404'>
      <h1>UH OH! You're lost.</h1>
      <button onClick={() => navigate('/')} >Home</button>
    </div>
  )
}
