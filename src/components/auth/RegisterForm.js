import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/auth/authActions';
import { useNavigate } from 'react-router-dom';
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import TextfieldCustom from '../common/TextfieldCustom';
import { getRoles } from '../redux/actions/Actions';


const RegisterForm = () => {
//  const { isAuthenticated, user } = useSelector((state) => state.auth);
const allRole = useSelector((state)=>state.getAllRoles.roles)
const [roleId, setRoleId] = useState([])
  const [roleName, setRoleName] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone_number: '',
    role_id:''
  });

  const { username, password, email, phone_number,  } = formData;
  //console.log('roles', allRole)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const registerData = {
    username: formData.username,
    password: formData.password,
    email: formData.email,
    phone_number: formData.phone_number,
    role_id: 2
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(registerData));
    //console.log("formdata", registerData)
    navigate("/")
  };

  const handleRoleChange = (e) => {
    //console.log('roleId', e.target.value)
    setRoleName(e.target.value)
    
  }
  //console.log('role id is', roleName)
  useEffect(() => {
    dispatch(getRoles())
    setRoleId(allRole)
  }, [dispatch,allRole])
  
  return (
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
      <h3>Register here</h3>
      <Grid container  spacing={2} sx={{border: '1px solid rgba(0,0,0,0.125', zIndex:"3"}} style={{padding: "30px"}}>
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
            <TextfieldCustom type="password" name="password" value={password} onChange={handleChange} placeholder="Password" />          
           </Grid>
          <Grid item xs={12}>
             <TextfieldCustom
             type="tel"
             name="phone_number" 
             required
             value={phone_number} onChange={handleChange} placeholder="Phone Number" />            
           </Grid>
           <Grid item xs={12}>
                 <Button variant="contained" style={{backgroundColor: '#3251A3', borderColor: '#FF5E14'}} 
                 fullWidth type="submit">
                   Register
                 </Button>
               </Grid>
           <Grid item xs={12}>
                 <Button variant="contained" fullWidth onClick={()=>navigate("/login")}>
                   Login If you have account
                 </Button>
               </Grid>
      </Grid>
      </Paper>
      </div>
      </Grid>
      </Container>
    </form>
  );
};

export default RegisterForm;
