import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Grid, Paper } from '@mui/material';
import TextfieldCustom from '../../../common/TextfieldCustom';
import { uploadNewCourse } from '../../../redux/actions/Actions';


const UploadCourseForm = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const userId = user?.role_id


  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    course_name: '', 
    instructor_id: null, 
    description: '', 
    duration: '', 
    start_date: null, 
    end_date: null
  });

  const { course_name, instructor_id, description, duration, start_date, end_date } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const courseData = {
    course_name: formData.course_name, 
    instructor_id: null, 
    description: formData.description, 
    duration: formData.duration, 
    start_date: null, 
    end_date: null
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(uploadNewCourse(courseData));
      navigate("/AdminCp/allCourses")
      console.log("formdata", courseData)        
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
      <h3>Upload new Course</h3>
      <Button onClick={()=>navigate(-1)}>Back</Button>
      <Grid container  spacing={2} sx={{border: '1px solid rgba(0,0,0,0.125', zIndex:"3"}} style={{padding: "30px"}}>
          <Grid item xs={6}>
             <TextfieldCustom
             type="text"
             name="course_name" 
             value={course_name} onChange={handleChange} placeholder="Course Name"
             required
             />            
           </Grid>
      {/*   <Grid item xs={6}>
             <TextfieldCustom
             type="text"
             name=" instructor_id" 
             value={ instructor_id} onChange={handleChange} placeholder=" instructor_id"
             required
             />            
           </Grid>    */}          
           <Grid item xs={6}>
             <TextfieldCustom
             type="text"
             name="description" 
             value={description} onChange={handleChange} placeholder="Description"
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
         
           <Grid item xs={12}>
                 <Button variant="contained" style={{backgroundColor: '#3251A3', borderColor: '#FF5E14'}} 
                 fullWidth type="submit">
                   Upload Course
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

export default UploadCourseForm
