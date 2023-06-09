import React, { useEffect, useState } from 'react'
import { saveAs } from "file-saver";
import TextfieldCustom from '../common/TextfieldCustom'
import { Button, Container, Grid, Paper, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getEmailId } from '../redux/actions/Actions';
import { register } from '../redux/auth/authActions';

const DownloadLesson = () => {
    const[mail,setMail] = useState('')
    const[formData, setFormData] = useState([])
    const dispatch = useDispatch()

    /* set default values for public visitors who wants to download lessons. same time email id will add in DB users table */
    const phoneNumberFormat = Math.floor(100000000 + Math.random() * 900000000);
   //console.log('random mobile', phoneNumberFormat+"1")
    const visitorData = {
      username:"",
      email: mail,
      password: "qwe",
      phone_number: phoneNumberFormat,
        role_id: "2"
    }
    useEffect(()=>{
      setFormData(visitorData)
    },[visitorData])
      const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("enter mail id is", formData)
        dispatch(register(formData))
        setMail("")
        if(mail !== ""){
          saveAs("/files/testFile.docx", "testFile.docx");
        }
        
      }
      
  return (
    <>
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Enter You email Id</h6>
                <h1 className="mb-5">Enter and Download full portions</h1>

                <form onSubmit={handleSubmit}>
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