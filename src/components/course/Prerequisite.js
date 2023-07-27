import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';

const Prerequisite = (props) => {
    //console.log('prerequisite', props?.prerequisiteData)
    const navigate = useNavigate()
  return (
    <div className='pre-req'>
        <h3>Prerequisite</h3>
        <div className="row pre-req-bg justify-content-center">
            {
                props?.prerequisiteData.slice(0,4).map((eachSkill,i)=>(
                    <div className="col-lg-3 col-md-3 col-sm-6" key={eachSkill.prerequisite_id}>
                        {
                            (eachSkill?.prerequisite_course_id !== null) ? 
                            <Button variant='contained' onClick={()=>navigate(`/courses/${eachSkill.prerequisite_course_id}`)}>
                                {eachSkill.prerequisite_name}
                            </Button> : 
                            <Button variant='contained'>
                                {eachSkill.prerequisite_name}
                            </Button>                          
                        }
                        
                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

export default Prerequisite