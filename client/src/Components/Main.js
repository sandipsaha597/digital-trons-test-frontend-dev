import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Main() {
  const slotsAndDetails = useSelector(state => state.slotsAndDetails)

  return (
    <div className='slots'>
      {slotsAndDetails.map(v => (
        <Link key={v.id} className={v.details.firstName !== '' ? 'not-available' : ''} to={'/' + v.timeSlot}>{v.timeSlot}</Link>
      ))
      }
    </div>
  )
}
