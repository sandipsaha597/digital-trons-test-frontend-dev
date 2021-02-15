import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import Page404 from './Page404'

export default function DetailsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [invalidTimeSlot, setInvalidTimeSlot] = useState(false)
  const navigate = useNavigate()
  const { timeSlot } = useParams()
  const slotsAndDetails = useSelector(state => state.slotsAndDetails)
  const dispatch = useDispatch()

  const firstName = useRef(null)
  const lastName = useRef(null)
  const phoneNumber = useRef(null)

  const saveDetails = (e) => {
    e.preventDefault()
    // not tracking if the submission is successful or not for the simplicity of the project
    setFormSubmitted(true)
    const values = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      phoneNumber: phoneNumber.current.value
    }
    dispatch({
      type: 'SAVE',
      timeSlot,
      values
    })

    // sending details to the backend
    axios.post('http://localhost:4000/api/save', { timeSlot, values })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

    setTimeout(() => {
      navigate('/')
    }, 2000);
  }

  useEffect(() => {
    const details = slotsAndDetails.find(v => v.timeSlot === timeSlot)
    if (details) {
      firstName.current.value = details.details.firstName
      lastName.current.value = details.details.lastName
      phoneNumber.current.value = details.details.phoneNumber
    } else {
      setInvalidTimeSlot(true)
    }
  }, [])

  return invalidTimeSlot ? (<Page404 />) : (
    <form onSubmit={saveDetails}>
      <input type='text' ref={firstName} autoFocus name='firstName' placeholder='First Name' required />
      < input type='text' ref={lastName} name='lastName' placeholder='Last Name' required />
      <input type='tel' ref={phoneNumber} pattern='[0-9]{10}' name='phoneNumber' placeholder='10 digit Phone number(9876543210)' required />
      <div className='buttons'>
        <button type='button' onClick={() => navigate('/')}>Cancel</button>
        <button type='submit' disabled={formSubmitted}>Save</button>
      </div>
      {
        formSubmitted && (
          <div className='overlay'>
            {/* Disclaimer: the animated svg code below isn't my original code. I took it from codepen and modified it  */}
            <svg
              id='svg'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='-7 -2 139 139'
            >
              <circle className='path circle'
                fill='none'
                stroke='#34e89e'
                strokeWidth='10'
                strokeMiterlimit='10'
                strokeLinecap='round'
                cx='60'
                cy='65.1'
                r='62.1'
              />

              <polyline className='path check'
                fill='none'
                stroke='#34e89e'
                strokeWidth='10'
                strokeMiterlimit='10'
                strokeLinecap='round'
                points='100, 40 51, 88 29, 67'
              />
            </svg>
          </div>
        )
      }
    </form >
  )
}
