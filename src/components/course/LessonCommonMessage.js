import { Download } from '@mui/icons-material'
import React from 'react'
import DownloadButton from './DownloadButton'

const LessonCommonMessage = (props) => {
  return (
    <div className='what-learn'>
        <div className='card-group'>
            <div className="card">
            <div className='course-detail-downarrow'>
                <i className='fa fa-solid fa-arrow-down'></i>
            </div>
            <div className='card-body'>
            <p>Course Name: {props.data?.course_name}</p>
            <p>Duration: {props.data?.duration}</p>
            <p>Course Coverage: {props.data?.description}</p>
            <div className='p-3 text-danger'>
                Lessons will be uploaded soon. Please <DownloadButton onDownload={props.onDownload} /> to know more
            </div>
            </div>
            
            </div>   
        </div>      
    </div>
  )
}

export default LessonCommonMessage
