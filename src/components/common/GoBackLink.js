import React from 'react'
import { Link } from 'react-router-dom'

const GoBackLink = () => {
  return (
    <>
    <div className="text-center">
                <h6 className="section-title bg-white text-center text-primary px-3">
                  <Link to={'/programs'}>Back</Link>
                </h6>
    </div>      
    </>
  )
}

export default GoBackLink
