import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Grid,  Paper } from '@mui/material';
import TextfieldCustom from '../../../common/TextfieldCustom';
import { fetchCoursesById,  updateCourseById } from '../../../redux/actions/Actions';


const UpdateCourse = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const userId = user?.role_id
  const fetchCourseById = useSelector((state)=> state. fetchCourseById.courseById)
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
   
    useEffect(()=>{
      dispatch( fetchCoursesById(id))
   },  [dispatch,id])
  /*  console.log('selected course name by id is', fetchCoursesById) */
   
   const selectedCourse = fetchCourseById[0]
   

  const [formData, setFormData] = useState({
    course_name: '',
    instructor_id: null,
    description: '',
    duration: ''
    /* start_date:'',
    end_date:'' */
   
  });

  const { course_name, 
    instructor_id, 
    description, 
    duration
  /*   start_date, 
    end_date */
   } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const courseData = {
    course_name: formData.course_name, 
    instructor_id: null,
    description: formData.description, 
    duration: formData. duration
  /*   start_date: formData.start_date,
    end_date: formData. end_date */
  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCourseById(courseData,id));
      navigate("/AdminCp/allCourses")
      console.log("formdata", courseData)        
  };
  useEffect(()=>{
    setFormData({
    course_name: selectedCourse?.course_name,
    instructor_id: selectedCourse?.instructor_id,
    description: selectedCourse?.description,
    duration: selectedCourse?.duration
   /*  start_date:selectedCourse?.start_date,
    end_date:selectedCourse?. end_date
    */

    })
   }, [selectedCourse])
  
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
      <h3>Update Course</h3>
      <h6>Course name: {selectedCourse?.course_name}</h6>
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
       {/*    <Grid item xs={6}>
             <TextfieldCustom
             type="text"
             name="instructor_id" 
             value={instructor_id} onChange={handleChange} placeholder="instructor_id"
             required
             />            
           </Grid> */}
           <Grid item xs={6}>
             <TextfieldCustom
             type="text"
             name="description" 
             value={description} onChange={handleChange} placeholder="description"
             required
             />            
           </Grid>
          <Grid item xs={6}>
             <TextfieldCustom
             type="text"
             name="duration" 
             value={duration} onChange={handleChange} placeholder="duration"
             required
             />            
           </Grid>
      {/*     <Grid item xs={6}>
             <TextfieldCustom
             type="text"
             name="start_dates" 
             value={start_date} onChange={handleChange} placeholder="start_date"
             required
             />            
           </Grid>
          <Grid item xs={6}>
             <TextfieldCustom
             type="text"
             name="end_date" 
             value={end_date} onChange={handleChange} placeholder="end_date"
             required
             />            
           </Grid> */}
         
           <Grid item xs={12}>
                 <Button variant="contained" style={{backgroundColor: '#3251A3', borderColor: '#FF5E14'}} 
                 fullWidth type="submit">
                   Update & Save Program
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

export default UpdateCourse