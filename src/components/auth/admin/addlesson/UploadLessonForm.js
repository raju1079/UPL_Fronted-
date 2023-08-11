import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Link, useNavigate } from 'react-router-dom'; 
import { Button, Container, FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import TextfieldCustom from '../../../common/TextfieldCustom';
import { uploadNewLesson ,fetchCourseList} from '../../../redux/actions/Actions'; 

const UploadLessonForm= () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
   useSelector((state)=> state.addNewLesson.newLesson) 
  const userId = user?.role_id 
  const fetchCourses = useSelector((state) => state.fetchAllCourses.courses  ); /* courses dropdown */
    
  const navigate = useNavigate()
   const dispatch = useDispatch();    
  const [formData, setFormData] = useState({
    course_id: '',  
    lesson_name: '', 
    content: ''
   
  });

  const {lesson_name, content } = formData;
  const [courseId, setCourseId] = useState(""); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const lessonData = {
    course_id: courseId, 
    lesson_name: formData.lesson_name, 
    content: formData. content, 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   dispatch(uploadNewLesson(lessonData));
      navigate("/AdminCp/allCourses") 
      console.log("formdata", lessonData)   

  };

  const handleCourseChange = (e) => {
    setCourseId(e.target.value);
 
  }; 

  useEffect(() => {
    dispatch(fetchCourseList());
  }, [dispatch]);

  
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
      <h3>Upload new Lesson</h3>
      <Button onClick={()=>navigate(-1)}>Back</Button>
      <Grid container  spacing={2} sx={{border: '1px solid rgba(0,0,0,0.125', zIndex:"3"}} style={{padding: "30px"}}>
      <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="course-id-label">course_id</InputLabel>
                <Select
                  labelId="course-id-label"
                  id="course-id-label"
                  value={courseId}
                  defaultValue={courseId}
                  label="course name"
                   onChange={handleCourseChange}
                  required 
                >
                  {fetchCourses.map((eachItem, i) => (
                    <MenuItem
                      key={eachItem.course_id}
                      value={eachItem.course_id}
                    >
                      {eachItem.course_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
       
           <Grid item xs={6}>
             <TextfieldCustom
             type="text"
             name="lesson_name" 
             value={lesson_name} onChange={handleChange} placeholder="lesson_name"
             required
             />            
           </Grid>
          <Grid item xs={6}>
             <TextfieldCustom
             type="text"
             name="content" 
             value={content} onChange={handleChange} placeholder="content"
             required
             />            
           </Grid>         
         
           <Grid item xs={12}>
                 <Button variant="contained" style={{backgroundColor: '#3251A3', borderColor: '#FF5E14'}} 
                 fullWidth type="submit">
                   Upload Lesson
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

export default UploadLessonForm
