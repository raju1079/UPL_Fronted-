import { PlayCircle } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

const PlayButton = () => {
  return (
    <>
        <div className="course-play-wrapper">
        <IconButton className="course-play-btn">
            <PlayCircle />
        </IconButton>
        </div>
    </>
  )
}

export default PlayButton
