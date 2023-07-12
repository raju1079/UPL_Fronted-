import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TextfieldCustom from './TextfieldCustom';
import { Container, Grid, Paper } from '@mui/material';
import { Button } from 'react-bootstrap';
import { register } from '../redux/auth/authActions';
import { useDispatch } from 'react-redux';

const MentorshipProgramForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone_number: '',
        role_id:''
      });
    
      const { username, email, phone_number  } = formData;
      //console.log('roles', allRole)
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const registerData = {
        username: formData.username,
        password: 'mentorprogram',
        email: formData.email,
        phone_number: formData.phone_number,
        role_id: 2
      }
      const handleSubmit = (e) => {
        e.preventDefault();
           dispatch(register(registerData));
          //navigate("/")
          //console.log("formdata", registerData)
          setFormData({
            username: '',
            email: '',
            phone_number: '',
            role_id:''
          })
      };
  return (
    <>
        <form onSubmit={handleSubmit} className='mb-3'>
                        <Paper elevation={2} className='p-3'>
                            <h5>Mentorship Program</h5>
                            <h6>Book your slot!!! FREE!!!</h6>
                            <Grid container  spacing={2} sx={{border: '1px solid rgba(0,0,0,0.125', zIndex:"3"}}>
                                <Grid item xs={12}>
                                    <TextfieldCustom
                                    type="text"
                                    name="username" 
                                    value={username} onChange={handleChange} placeholder="Username"
                                    required
                                    />            
                                </Grid>
                                <Grid item xs={12}>
                                    <TextfieldCustom
                                    type="email"
                                    name="email" 
                                    value={email} onChange={handleChange} placeholder="Email" />            
                                </Grid>
                                <Grid item xs={12}>
                                    <TextfieldCustom
                                    type="tel"
                                    name="phone_number" 
                                    required
                                    value={phone_number} onChange={handleChange} placeholder="Phone Number" />            
                                </Grid>
                                <Grid item xs={12} className='text-end'>
                                        <Button variant="contained" className='btn-danger py-md-3 animated slideInRight border-radius-btn'
                                        type="submit">
                                        Book Now
                                        </Button>
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

export default MentorshipProgramForm
