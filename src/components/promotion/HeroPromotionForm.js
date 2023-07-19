import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Container, Grid, Paper } from '@mui/material';
import { Button } from 'react-bootstrap';
import { register } from '../redux/auth/authActions';
import { useDispatch, useSelector } from 'react-redux';
import PopUpModal from '../common/PopUpModal';
import TextfieldCustom from '../common/TextfieldCustom';
import { getProgramCourseCombo, registerSubsciber } from '../redux/actions/Actions';

const HeroPromotionForm = () => {
  const programCourseId = useSelector((state)=> state.programCourseCombo.programCourseCombination)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone_number: '',
        education: '',
        college: '',
        intershipduration: '',
        program_id: '',
        course_id: '',
        role_id:''
      });
    
      const { username, email, phone_number,education,college,intershipduration,program_id, course_id  } = formData;
      //console.log('roles', allRole)


       //pop up modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      if(email !== "" && phone_number !== ""){
          setOpen(true)
      }
    }
    const handleClose = () => setOpen(false);
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const registerData = {
        subscriber_name: formData.username,
        email: formData.email,
        phone_number: formData.phone_number,
        education:formData.education,
        college: formData.college,
        internshipduration:formData.intershipduration,
        //program_course_id: programCourseId
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getProgramCourseCombo({"program_id": program_id,"course_id": course_id}))
       // console.log('course combo is',programCourseId[0]?.program_course_id)
        if(programCourseId !== ""){
          dispatch(registerSubsciber(registerData,{"program_course_id":programCourseId[0]?.program_course_id }))
        }
           //dispatch(register(registerData));
          //navigate("/")
          console.log("formdata", registerData)
          setFormData({
            username: '',
            email: '',
            phone_number: '',
            education: '',
            college: '',
            intershipduration: '',
            program_id: '',
            course_id: ''
          })
      };
  return (
    <>
        <form onSubmit={handleSubmit} className='mb-3'>
                        <Paper elevation={2} className='p-3'>
                            <h5>Register for latest PROGRAMS</h5>
                            <h6>FREE!!!</h6>
                            <Grid container  spacing={2} sx={{border: '1px solid rgba(0,0,0,0.125', zIndex:"3"}}>
                                <Grid item xs={12} md={6}>
                                    <TextfieldCustom
                                    type="text"
                                    name="username" 
                                    value={username} onChange={handleChange} placeholder="Username"
                                    required
                                    />            
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextfieldCustom
                                    type="email"
                                    name="email" 
                                    value={email} onChange={handleChange} placeholder="Email" />            
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextfieldCustom
                                    type="tel"
                                    name="phone_number" 
                                    required
                                    value={phone_number} onChange={handleChange} placeholder="Phone Number" />            
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextfieldCustom
                                    type="text"
                                    name="education" 
                                    required
                                    value={education} onChange={handleChange} placeholder="Education" />            
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextfieldCustom
                                    type="text"
                                    name="college" 
                                    required
                                    value={college} onChange={handleChange} placeholder="College" />            
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextfieldCustom
                                    type="text"
                                    name="intershipduration" 
                                    required
                                    value={intershipduration} onChange={handleChange} placeholder="Intership duration" />            
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextfieldCustom
                                    type="text"
                                    name="program_id" 
                                    required
                                    value={program_id} onChange={handleChange} placeholder="Program Id" />            
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextfieldCustom
                                    type="text"
                                    name="course_id" 
                                    required
                                    value={course_id} onChange={handleChange} placeholder="Course Id" />            
                                </Grid>
                                <Grid item xs={12} className='text-end'>
                                        {/* <Button variant="contained" className='btn-danger py-md-3 animated slideInRight border-radius-btn'
                                        type="submit">
                                        Book Now
                                        </Button> */}
                                        <PopUpModal 
                                        buttonname={"Book Now"} 
                                        buttonClassName="btn btn-danger py-md-3 animated slideInRight"
                                        buttonType="submit"
                                        open={open}
                                        setOpen={setOpen}
                                        handleClose={handleClose}
                                        handleOpen={handleOpen}
                                        />
                                </Grid>
                                <Grid item xs={12} className='text-end'>
                                    <Button variant="contained"  onClick={()=>navigate("/login")}>
                                        If you have account <span className='text-primary'>Login</span> 
                                    </Button>
                                </Grid>
                            </Grid>
                            </Paper>    
                        </form>      
    </>
  )
}

export default HeroPromotionForm
