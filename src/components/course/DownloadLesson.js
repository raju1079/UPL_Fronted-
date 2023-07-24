import React, { useEffect, useState } from 'react'
import { saveAs } from "file-saver";
import TextfieldCustom from '../common/TextfieldCustom'
import { Button, Container, Grid, Paper, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getEmailId } from '../redux/actions/Actions';
import { register } from '../redux/auth/authActions';
import { useLocation } from 'react-router-dom';
import GoBackLink from '../common/GoBackLink';

const DownloadLesson = () => {
  const location = useLocation()
  const [courseInterested, setCourseInterested] = useState(location.state.interestedCourse)
  const [courseInterestedId, setCourseInterestedId] = useState(location.state.interestedCourseId)
  const[programInterested, setProgramInterested] = useState(location.state.programInterested)
    const[mail,setMail] = useState('')
    const[mobile,setMobile] = useState('')
    const[formData, setFormData] = useState([])
    const dispatch = useDispatch()
  //console.log('course interested to download is',courseInterested)
    const visitorData = {
      username:"",
      email: mail,
      password: "qwe",
      phone_number: mobile,
        role_id: "2",
      course_id: courseInterestedId
    }
    useEffect(()=>{
      setFormData(visitorData)
    },[visitorData])
      const handleSubmit = (e)=>{
        e.preventDefault()
        //console.log("enter mail id is", formData)
        //dispatch(register(formData))
        dispatch(getEmailId(formData))
        setMail("")
        setMobile("")
        if(mail !== "" && mobile != ""){
          saveAs(`materials/${programInterested}/${courseInterested.replaceAll(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")}.pdf`, `${courseInterested}.pdf`);
        }
        
      }
      
  return (
    <>
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">{`You are at: ${programInterested} / ${courseInterested}`}</h6>
                <h1 className="mb-5">Enter and Download full portions</h1>

                <form onSubmit={handleSubmit}>
                  <GoBackLink />
                <Container maxWidth="sm" className=" d-flex" >    
                    <Grid
                      container
                      spacing={2}
                      direction="column"
                      justifyContent="center"
                      
                    >
                        <div style={{ width: "inherit"}}>
                        <Paper elevation={2} sx={{ padding: 5 }} style={{ marginTop: '50px' }}>
                        <Grid container  spacing={2} sx={{border: '1px solid rgba(0,0,0,0.125', zIndex:"3"}} style={{padding: "30px"}}>
                          <Grid item xs={12}>
                          <TextField 
                            type="email"
                            required
                            name="Enter Your Email id"
                            placeholder='Enter Your Email id'
                            value={mail}
                            onChange={(e)=>setMail(e.target.value)}
                            />
                          </Grid>
                          <Grid item xs={12}>
                          <TextField 
                            type="tel"
                            required
                            name="Enter Your Mobile Number"
                            placeholder='Enter Your Mobile Number'
                            value={mobile}
                            onChange={(e)=>setMobile(e.target.value)}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Button className="btn btn-primary py-2 mx-3 top-0 end-0 mt-2 me-2" type='sybmit' >Download Syllabus</Button>
                          </Grid>
                        </Grid>
                        </Paper>
                        </div>
                      </Grid>
                  </Container>
                    
                    
                    
                </form>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default DownloadLesson