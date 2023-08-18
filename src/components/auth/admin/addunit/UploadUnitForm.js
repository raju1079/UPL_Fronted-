import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Link, useNavigate } from 'react-router-dom'; 
import { Button, Container,  Grid, IconButton, InputAdornment, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import TextfieldCustom from '../../../common/TextfieldCustom';
import { fetchLessons, uploadNewUnit,fetchLessonId } from '../../../redux/actions/Actions';
import FormControl from '@mui/material/FormControl'; 




const UploadUnitForm= () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
   useSelector((state)=> state.addNewUnit.newUnit) 
  const userId = user?.role_id 
  const fetchLesson = useSelector(
    (state) => state.getLessons.lessons
  ); /* courses dropdown */


  const navigate = useNavigate()
   const dispatch = useDispatch();    
  const [formData, setFormData] = useState({
    lesson_id: '', 
    unit_name: '', 
    content: ''
   
  });

  const { unit_name, content } = formData;
  const [lessonId, setLessonId] = useState(""); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const unitData = {
    lesson_id: lessonId,
    unit_name: formData.unit_name, 
    content: formData.content, 
   
   
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   dispatch(uploadNewUnit(unitData));
      navigate("/AdminCp/allCourses") 

      
      console.log("formdata", unitData)        
  };

  const handleCourseChange = (e) => {
    setLessonId(e.target.value);
     dispatch(fetchLessonId(e.target.value)); 
   
    
    
  }; 

  useEffect(() => {
    dispatch(fetchLessons());
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
      <h3>Upload new Unit</h3>
      <Button onClick={()=>navigate(-1)}>Back</Button>
      <Grid container  spacing={2} sx={{border: '1px solid rgba(0,0,0,0.125', zIndex:"3"}} style={{padding: "30px"}}>
      <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="lesson-id-label">Lesson name</InputLabel>
                <Select
                  labelId="lesson-id-label"
                  id="lesson-id-label"
                  value={lessonId}
                  defaultValue={lessonId}
                  label="lesson name"
                    onChange={handleCourseChange}
                  required  
                >
                  {fetchLesson.map((eachItem, i) => (
                    <MenuItem
                      key={eachItem.lesson_id}
                      value={eachItem.lesson_id}
                    >
                      {eachItem.lesson_id}.{eachItem.lesson_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
        
           <Grid item xs={6}>
             <TextfieldCustom
             type="text"
             name="unit_name" 
             value={unit_name} onChange={handleChange} placeholder="Unit name"
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
                   Upload Unit
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

export default UploadUnitForm
