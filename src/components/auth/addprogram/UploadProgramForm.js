import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/authActions';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import TextfieldCustom from '../../common/TextfieldCustom';
import { uploadNewProgram } from '../../redux/actions/Actions';

const UploadProgramForm = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const userId = user?.role_id


  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    program_name: '',
    duration: '',
    cost: '',
    target_audience: '',
    program_details:'',
    program_coverage:'',
    outcome:'',
    career_opportunities: '',
    registration_charge: '',
    gst:''
  });

  const { program_name, 
    duration, 
    cost, 
    target_audience,
    program_details, 
    program_coverage, 
    outcome,
    career_opportunities,
    registration_charge, gst} = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const programData = {
    program_name: formData.program_name, 
    duration: formData.duration,
    cost: formData.cost, 
    target_audience: formData.target_audience,
    program_details: formData.program_details,
    program_coverage: formData.program_coverage,
    outcome: formData.outcome,
    career_opportunities: formData.career_opportunities, 
    registration_charge: formData.registration_charge, 
    gst: formData.gst
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(uploadNewProgram(programData));
      navigate("/auth/allPrograms")
      console.log("formdata", programData)        
  };

  
  return (
    <div>
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
      <h3>Upload new Program</h3>
      <Button onClick={()=>navigate(-1)}>Back</Button>
      <Grid container  spacing={2} sx={{border: '1px solid rgba(0,0,0,0.125', zIndex:"3"}} style={{padding: "30px"}}>
          <Grid item xs={6}>
             <TextfieldCustom
             type="text"
             name="program_name" 
             value={program_name} onChange={handleChange} placeholder="Program Name"
             required
             />            
           </Grid>
          <Grid item xs={6}>
             <TextfieldCustom
             type="text"
             name="duration" 
             value={duration} onChange={handleChange} placeholder="Duration"
             required
             />            
           </Grid>
           <Grid item xs={6}>
             <TextfieldCustom
             type="text"
             name="cost" 
             value={cost} onChange={handleChange} placeholder="Cost"
             required
             />            
           </Grid>
          <Grid item xs={6}>
             <TextfieldCustom
             type="text"
             name="target_audience" 
             value={target_audience} onChange={handleChange} placeholder="Target Audience"
             required
             />            
           </Grid>
          <Grid item xs={6}>
             <TextfieldCustom
             type="text"
             name="program_details" 
             value={program_details} onChange={handleChange} placeholder="Program Details"
             required
             />            
           </Grid>
          <Grid item xs={6}>
             <TextfieldCustom
             type="text"
             name="program_coverage" 
             value={program_coverage} onChange={handleChange} placeholder="Program Coverage"
             required
             />            
           </Grid>
          <Grid item xs={6}>
             <TextfieldCustom
             type="text"
             name="outcome" 
             value={outcome} onChange={handleChange} placeholder="Outcome"
             required
             />            
           </Grid>
          <Grid item xs={6}>
             <TextfieldCustom
             type="text"
             name="career_opportunities" 
             value={career_opportunities} onChange={handleChange} placeholder="Career Opportunities"
             required
             />            
           </Grid>
          <Grid item xs={6}>
             <TextfieldCustom
             type="text"
             name="registration_charge" 
             value={registration_charge} onChange={handleChange} placeholder="Registration Charge"
             required
             />            
           </Grid>
          <Grid item xs={6}>
             <TextfieldCustom
             type="text"
             name="gst" 
             value={gst} onChange={handleChange} placeholder="GST"
             required
             />            
           </Grid>
          
         
           <Grid item xs={12}>
                 <Button variant="contained" style={{backgroundColor: '#3251A3', borderColor: '#FF5E14'}} 
                 fullWidth type="submit">
                   Upload Program
                 </Button>
            </Grid>
      </Grid>
      </Paper>
      </div>
      </Grid>
      </Container>
    </form>      
    </div>
  )
}

export default UploadProgramForm
