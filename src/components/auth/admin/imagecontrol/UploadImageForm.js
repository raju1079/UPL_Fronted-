import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import TextfieldCustom from '../../../common/TextfieldCustom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { uploadNewImage } from '../../../redux/actions/Actions';

const UploadImageForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [file, setFile] = useState(null);
  const [courseId, setCourseId] = useState('');
  const [programId, setProgramId] = useState('');
  const [type, setType] = useState('');
  const [filePath, setfilePath] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file.');
      return;
    }
   
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
  dispatch(uploadNewImage(formData))
    
  };
  /* useEffect(()=>{
    if (!file) {
      setFile('http://localhost:8000/2003843.jpg')
      
    }
  },[]) */

  return (
    <div>
      <div className="container-xxl">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Upload Image</h6>
            </div>
            <div className='p-5'>
            <form >
              <Container maxWidth="sm" className=" d-flex" >            
              <Grid
                container
                spacing={2}
                direction="column"
                justifyContent="center"
                
              >
                <div style={{ width: "inherit"}}>
                <Paper elevation={2} sx={{ padding: 5 }} style={{ marginTop: '50px' }}>
                <h3>Upload image</h3>
                <Button onClick={()=>navigate(-1)}>Back</Button>
                  <Grid container  spacing={2} sx={{border: '1px solid rgba(0,0,0,0.125', zIndex:"3"}} style={{padding: "30px"}}>
                  <input type="file" onChange={handleFileChange} />
                  <Grid item xs={6}>
                    <TextfieldCustom
                    type="text"
                    placeholder="Course ID"
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
                    required
                    />            
                  </Grid>
                  <Grid item xs={6}>
                    <TextfieldCustom
                    type="text"
                    placeholder="Program ID"
                    value={programId}
                    onChange={(e) => setProgramId(e.target.value)}
                    required
                    />            
                  </Grid>
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
                    <Button variant="contained" style={{backgroundColor: '#3251A3', borderColor: '#FF5E14'}} 
                    fullWidth type="button" onClick={handleUpload}>
                      Upload Image
                    </Button>
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
      
    </div>
  );
};

export default UploadImageForm;