import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AllProgramsButton = () => {
    const navigate = useNavigate()
  return (
    <div className='row m-0 justify-content-center all-progrm-btn'>
        <div className='col-4 text-center'>
            <Button onClick={()=>navigate('/programs')}>Browse All</Button>
        </div>
    </div>
  )
}

export default AllProgramsButton