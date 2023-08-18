import { Download } from '@mui/icons-material'
import React from 'react'
import DownloadButton from './DownloadButton'

const PrerequisiteCommon = (props) => {
  return (
    <div className='pre-req'>
        <h3>Prerequisite</h3>
        <div className="row pre-req-bg justify-content-center">
            <p>Course Name: {props.data?.course_name}</p>
            <div className='p-3 text-danger'>
                Prerequisite will be uploaded soon
            </div>
        </div>
        
    </div>
  )
}

export default PrerequisiteCommon
