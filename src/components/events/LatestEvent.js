import React from 'react'
import LandingPage from './LandingPage'
import { useParams } from 'react-router-dom'

const LatestEvent = () => {
    const {id} = useParams()
  return (
    <div className='pt-3'>
      <h2>Latest Event {id}</h2>
      <LandingPage />
    </div>
  )
}

export default LatestEvent
