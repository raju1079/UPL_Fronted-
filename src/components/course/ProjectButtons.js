import { Button } from '@mui/material'
import React from 'react'

const ProjectButtons = (props) => {
  return (
    <>
    <div className="row project-button-wrapper justify-content-center">
        <div className='course-detail-downarrow'>
            <i className='fa fa-solid fa-arrow-down'></i>
        </div>
        <div className='project-btn-wrapper-bg justify-content-center d-flex'>
            <div className="col-lg-4 col-md-3 col-sm-6">
                <Button variant='contained'>{props.buttonName}</Button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProjectButtons