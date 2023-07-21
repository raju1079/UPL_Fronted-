import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Prerequisite = () => {
  return (
    <div className='pre-req'>
        <h3>Prerequisite</h3>
        <div className="row pre-req-bg justify-content-center">
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <Button variant='contained'>HTML</Button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <Button variant='contained'>CSS</Button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <Button variant='contained'>Bootstrap</Button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <Button variant='contained'>Javascript</Button>
                </div>
        </div>
        
    </div>
  )
}

export default Prerequisite