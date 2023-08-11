import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import { fetchCourseList, uploadNewProgram } from '../../../redux/actions/Actions';
import TextfieldCustom from '../../../common/TextfieldCustom';
import axios from 'axios';
import securedInstance from '../../../../api/securedInstance';

const ProgramCourseUpload = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const fetchPrograms = useSelector((state) => state.fetchAllPrograms.programs); /* programs dropdown */
  const fetchCourses = useSelector((state) => state.fetchAllCourses.courses); /* courses dropdown */

  const userId = user?.role_id
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [programId, setProgramId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [item, setItem] = useState([]);

    const [file, setFile] = useState(null);
  const [type, setType] = useState('');
  const [filePath, setfilePath] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  
  const handleProgramChange = (e) => {
    setProgramId(e.target.value);
  };

  const handleCourseChange = (e) => {
    setCourseId(e.target.value);
  };

  const programCourseData = {
    program_id: programId,
    course_id: courseId

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
        alert('Please select a file.');
        return;
      }
      const headers = {
        'Content-Type': 'multipart/form-data',
      };
      const formData = new FormData();
      formData.append('file', file);
      formData.append('courseId', courseId);
      formData.append('programId', programId);
      formData.append('type', type);
      formData.append('filePath', filePath);
       // Log the keys and values in the FormData
    for (const [key, value] of formData.entries()) {
      console.log(`****${key}:`, value);
    }
    await axios
      .post('http://localhost:8000/api/awsimage', formData, { headers })
      .then((response) => {
        console.log(response.data);
        // Handle successful upload
        setFile(null)
        setfilePath('')
        setType('')
      })
      .catch((error) => {
        console.error(error);
      });
    await securedInstance.post(`http://localhost:8000/api/category`,programCourseData)
    .then((res)=>{
        console.log("formdata", res.data);
        setCourseId('')
        setProgramId('')
    })
    .catch((error) => {
        console.error(error);
      });
  };
  //console.log('form data', programCourseData)

  useEffect(() => {
    dispatch(fetchCourseList())
    setItem(fetchCourses);
  }, [dispatch,item, fetchCourses]);
  
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
      <input type="file" onChange={handleFileChange} />
      <Grid item xs={6}>
                    <TextfieldCustom
                    type="text"
                    placeholder="Type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                    />            
                  </Grid>
                  <Grid item xs={6}>
                    <TextfieldCustom
                    type="text"
                    placeholder="Directory Path"
                    value={filePath}
                    onChange={(e) => setfilePath(e.target.value)}
                    required
                    />            
                  </Grid>
      <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Programs</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={programId}
                  defaultValue={programId}
                  label="Program name"
                  onChange={handleProgramChange}
                  required
                >
                  {fetchPrograms.map((eachItem, i) => (
                    <MenuItem
                      key={eachItem.program_id}
                      value={eachItem.program_id}
                    >
                      {eachItem.program_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Courses</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={courseId}
                  defaultValue={courseId}
                  label="program"
                  onChange={handleCourseChange}
                  required
                >
                  {item?.map((eachItem, i) => (
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
          
         
           <Grid item xs={12}>
                 <Button variant="contained" style={{backgroundColor: '#3251A3', borderColor: '#FF5E14'}} 
                 fullWidth type="submit">
                   Create Program Course
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

export default ProgramCourseUpload
