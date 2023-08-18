import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../redux/auth/authActions';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { getRoles } from '../../../redux/actions/Actions';
import TextfieldCustom from '../../../common/TextfieldCustom';



const NewUserForm = () => {
const { isAuthenticated, user } = useSelector((state) => state.auth);
const userId = user?.role_id
const allRole = useSelector((state)=>state.getAllRoles.roles)
const [roleId, setRoleId] = useState([])
  const [roleName, setRoleName] = useState('')
  const [showPassword,setShowPassword] = useState(false)
  
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone_number: '',
    role_id:'',
    confirmPassword:''
  });

  const { username, password, email, phone_number,confirmPassword  } = formData;
  //console.log('roles', allRole)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const registerData = {
    username: formData.username,
    password: formData.password,
    email: formData.email,
    phone_number: formData.phone_number,
    role_id: roleName
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword){
      alert('Password and Confirm Password Should Match')
    }else{
      dispatch(register(registerData));
      //navigate("/AdminCp/AdminDashboard")
      //console.log("formdata", registerData)
    }
        
  };
  const handleCreateUser = () =>{
    if(userId === 1){
        if(formData.password !== formData.confirmPassword){
            alert('Password and Confirm Password Should Match')
          }else{
           // dispatch(register(registerData));
            //navigate("//AdminDashboard")
            console.log("formdata", registerData)
          }
    }
  }

  const handleRoleChange = (e) => {
    //console.log('roleId', e.target.value)
    setRoleName(e.target.value)
    
  }

  const handleClickShowPassword = () =>{
    setShowPassword(!showPassword)
  }
  const handleClickShowConfirmPassword = () =>{
    setShowConfirmPassword(!showConfirmPassword)
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
      <h3>Add New User Form</h3>
      <Button onClick={()=>navigate(-1)}>Back</Button>
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
            <TextfieldCustom 
            type={showPassword?"text":"password"}
             name="password" value={password} onChange={handleChange} placeholder="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    
                    edge="end"
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            />          
           </Grid>
          <Grid item xs={12}>
            <TextfieldCustom 
            type={showConfirmPassword?"text":"password"}
             name="confirmPassword" value={confirmPassword} onChange={handleChange} placeholder="Confirm Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            />          
           </Grid>
          <Grid item xs={12}>
             <TextfieldCustom
             type="tel"
             name="phone_number" 
             required
             value={phone_number} onChange={handleChange} placeholder="Phone Number" />            
           </Grid>
           <Grid item xs={12}>
            <FormControl variant="outlined" style={{ minWidth: '100%' }}>
              <InputLabel>Role Name</InputLabel>
              <Select
                name="roleName"
                label="Role Name"
                value={roleName}
                onChange={handleRoleChange}
                options={roleId}
              >
                {roleId.map((eachRoleName) => (
                  <MenuItem key={eachRoleName.role_id} value={eachRoleName.role_id}>
                    {eachRoleName.role_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>        
           </Grid>
           <Grid item xs={12}>
                 <Button variant="contained" style={{backgroundColor: '#3251A3', borderColor: '#FF5E14'}} 
                 fullWidth type="submit">
                   Create New User
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

export default NewUserForm