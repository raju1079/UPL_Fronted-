import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/auth/authActions';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  TextField,
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import TextfieldCustom from '../common/TextfieldCustom';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";

const LoginForm = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const userId = user?.role_id
  const [showPassword,setShowPassword] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { password, identifier } = formData;

  const handleChange = (e) => {
    // console.log(formData);
    const {name, value} = e.target;
    // Check if the name is 'identifier' and update both username and email fields
    if (name === 'identifier') {
      setFormData({ ...formData, username: value, email: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    // setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onChangePassword = (e) => {
    // console.log(formData);
    const {name, value} = e.target;
    setFormData({ ...formData, password: value });
    // setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };
 
  /* useEffect(()=>{
    if(user){
      navigate("/welcome")
    }else{
      navigate("/login")
    }
  }, [user]) */
  
  useEffect(()=>{
    if(userId === 3){
      navigate("/auth/ExecutorDashboard") /* if it is executor, it will take to executor dashboard */
    }else if(userId === 1){
      navigate("/auth/AdminDashboard")
    }else if(userId === 2 || userId === 4 || userId === null){ /* other users: future admin/marketing will have seperate dashborad. then split up the condition */
      navigate("/welcome")
    }else{
      navigate("/login")
    }

  }, [userId])

  const handleClickShowPassword = () =>{
    setShowPassword(!showPassword)
  }

  const handleSignUp = (e) => {
    navigate('/registerform')
  }
  
  const handleForgotPassword = (e) => {
    navigate('/forgotpassword')
  }


  return (
    <>
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
      <Grid container  spacing={2} sx={{border: '1px solid rgba(0,0,0,0.125', zIndex:"3"}} style={{padding: "30px"}}>
         
         <Grid item xs={12}>
             <TextfieldCustom
             type="text"
             name="identifier" 
             required
             value={identifier} onChange={handleChange} placeholder="Email or Username" />            
           </Grid>
           
           <Grid item xs={12}>
             <TextfieldCustom
             type={showPassword?"text":"password"}
             name="password" 
             value={password} onChange={handleChange} placeholder="Password"
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
           <Grid item xs={12} >
                 <Link underline="hover" onClick={handleForgotPassword}>
                   Forgot Password?
                 </Link>
               </Grid>
 
               <Grid item xs={12}>
                 <Button variant="contained" style={{backgroundColor: '#3251A3', borderColor: '#FF5E14'}} 
                 fullWidth type="submit">
                   LOGIN
                 </Button>
               </Grid>             
               <Grid item xs={6}>
                 <span>Don't have an account? </span>
                 <Link
                   variant="contained"
                   onClick={handleSignUp}
                   underline="none"
                  className='signUp'
                 >
                   SignUp
                 </Link>
               </Grid>
     
           </Grid>
      </Paper>
      </div>
    </Grid>
    </Container>
    </form>
    </>
  );
};

export default LoginForm;
