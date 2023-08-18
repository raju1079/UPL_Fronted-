import React, { useState } from 'react'

const DownloadButton = (props) => {
      
  return (
    <div>
        <button className="btn btn-primary py-2 mx-3 top-0 end-0 mt-2 me-2" onClick={props.onDownload}>Download Syllabus</button>        
    </div>
  )
}

export default DownloadButton