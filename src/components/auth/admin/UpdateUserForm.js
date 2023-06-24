import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/authActions';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import TextfieldCustom from '../../common/TextfieldCustom';
import { getRoles, getUserById, getVisitorById } from '../../redux/actions/Actions';

const statusList = ['Registered','Pending','Completed']

const UpdateUserForm = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const fetchUsersById = useSelector((state)=> state.getUsersById.userById)
  const userId = user?.role_id
  const allRole = useSelector((state)=>state.getAllRoles.roles)
  const { id } = useParams()
  
  const [roleId, setRoleId] = useState([])
    const [roleName, setRoleName] = useState('')
    
    const[userStatus,setUserStatus]=useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch();
   
   const selectedUser = fetchUsersById[0]
  
    const [formData, setFormData] = useState({
      username: '',
      password: '',
      email: '',
      phone_number: '',
      role_id:'',
      user_status:''
    });
  
    const { username, password, email, phone_number,role_id  } = formData;
    //console.log('roles', allRole)
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const updatedData = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
      phone_number: formData.phone_number,
      role_id: selectedUser?.role_id,
      user_status: userStatus
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      //dispatch(register(registerData));
        //navigate("/auth/AdminDashboard")
      console.log("formdata", updatedData)        
    };
   
    //console.log('role id is', roleName)
    useEffect(() => {
      dispatch(getRoles())
      setRoleId(allRole)
    }, [dispatch,allRole])
    
    const handleStatusChange = (e) =>{
      setUserStatus(e.target.value)
  }
  
  useEffect(()=>{
      dispatch(getUserById(id))
   },  [dispatch,id])
  
   useEffect(()=>{
      setFormData({
          username: selectedUser?.username,
          password: selectedUser?.password,
          email: selectedUser?.email,
          phone_number: selectedUser?.phone_number,        
          user_status:''
        })
      //console.log('selected userr name by id is', selectedUser)
   }, [selectedUser])
  
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
        <h3>Update User Info</h3>
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
               value={email} onChange={handleChange} placeholder="Email"
                />            
             </Grid>
            <Grid item xs={12}>
               <TextfieldCustom
               type="tel"
               name="phone_number" 
               required
               value={phone_number} onChange={handleChange} placeholder="Phone Number"
                />            
             </Grid>
             
             <Grid item xs={12}>
             <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={userStatus}
                  label="Status"
                  onChange={handleStatusChange}
                  >
                      {
                          statusList.map((eachStatus,i)=>(
                              <MenuItem key={i} value={eachStatus}>{eachStatus}</MenuItem>
                          ))
                      }
                  </Select>
              </FormControl>        
             </Grid>
             <Grid item xs={12}>
                   <Button variant="contained" style={{backgroundColor: '#3251A3', borderColor: '#FF5E14'}} 
                   fullWidth type="submit">
                     Update User
                   </Button>
                 </Grid>
        </Grid>
        </Paper>
        </div>
        </Grid>
        </Container>
      </form>
    );
}

export default UpdateUserForm