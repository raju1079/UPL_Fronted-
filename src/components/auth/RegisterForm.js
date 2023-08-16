import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/auth/authActions';
import { useNavigate } from 'react-router-dom';
import { Button, Container, FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import TextfieldCustom from '../common/TextfieldCustom';
import { fetchProgramById, fetchProgramId, fetchProgramList,
    getRoles, fetchSubProgramId, sendEmailNotification, getUserById, findUserByEmail, } from '../redux/actions/Actions';
import PopUpModal from '../common/PopUpModal';
import axios from 'axios';


const RegisterForm = () => {
  const {isAuthenticated, user} = useSelector((state) => state.auth);
  const fetchUsersById = useSelector((state)=> state.getUsersById.userById)
const allRole = useSelector((state)=>state.getAllRoles.roles)
const fetchPrograms = useSelector((state) => state.fetchAllPrograms.programs); /* programs dropdown */
const fetchProgramsById = useSelector((state) => state.fectchProgramById.programById); /* courses dropdownlist as per program id */
//const programCourseId = useSelector((state) => state.programCourseCombo.programCourseCombination); /* program course combo  */

const fetchUserByEmail = useSelector((state) => state.getUsersByEmail.userByEmail);

//const lastRegisterUser = fetchUsersById[0];
const [isRegister,setIsRegister] = useState(false)
const [lastRegisterUser,setLastRegisterUser] = useState('')

const [roleId, setRoleId] = useState([])
  const [roleName, setRoleName] = useState('')
  const [showPassword,setShowPassword] = useState(false)
  
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch();
  
  const [item, setItem] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone_number: '',
    role_id:'',
    confirmPassword:'',
    program_id: "",
    course_id: "",
  });

  const { username, password, email, phone_number,confirmPassword  } = formData;
  const [programId, setProgramId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [subProgramId, setSubProgramId] = useState("");

  const getSubprogramId = useSelector((state) => state.fetchSubProgramId.subprogramId); /* subprogram dropdownlist as per program id */
   //console.log("Redux State:", fetchSubProgramId)  

  const handleProgramChange = (e) => {
    setProgramId(e.target.value);
    dispatch(fetchProgramById(e.target.value));
    dispatch(fetchSubProgramId(e.target.value));
    dispatch(fetchProgramId(e.target.value));
  };

  /* const handleCourseChange = (e) => {
    setCourseId(e.target.value);
  };
  //console.log('roles', allRole)

  //pop up modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (formData !== '' && programId !== '' && courseId !== '' || programId === 99) {
      setOpen(true);
      
    }
  }; */
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
   const registerData = {
    username: formData.username,
    //password: formData.password,
    email: formData.email,
    phone_number: formData.phone_number,
    role_id: "2",
    subprogram_id:subProgramId,
    //program_course_id: (courseId !== "") ? programCourseId[0]?.program_course_id : programId,
  } 
  
  const emailData = {
    emailId:lastRegisterUser
  }
  const emailData2 = {
    userId:fetchUserByEmail[0]?.user_id,
    emailId: fetchUserByEmail[0]?.email
  }
   
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("sub" ,getSubprogramId ) 
    if (formData.password !== formData.confirmPassword) {
      alert('Password and Confirm Password Should Match')
    } else{
     dispatch(register(registerData));
     setLastRegisterUser(formData.email)
     setIsRegister(true)
     
      console.log("formdata", registerData)
      setFormData({
        username: "",
        email: "",
        password:'',
        phone_number: "",
        confirmPassword:''

      });
      setProgramId("");
      setSubProgramId("");
      setCourseId("");
     

    }
        
  };
  const handleRoleChange = (e) => {
    //console.log('roleId', e.target.value)
    setRoleName(e.target.value)

  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  //console.log('role id is', roleName)
  useEffect(() => {
    dispatch(getRoles())
    setRoleId(allRole)
  }, [dispatch,allRole])

  useEffect(() => {
    setItem(fetchProgramsById);
  }, [item, fetchProgramsById]);

  /* useEffect(() => {
    if (formData !== "") {
      dispatch(getProgramCourseCombo({ program_id: programId, course_id: courseId }));
      if(courseId === ''){
        dispatch(fetchProgramById(programId))
      }
    }

  }, [formData, programId, courseId]); */

  useEffect(() => {
    dispatch(fetchProgramList());
  }, [dispatch]);

  const handleSubProgramChange = (e) => {
    setSubProgramId(e.target.value);
  
  };

  useEffect(()=>{
    if(formData !== ""){
      //setLastRegisterUser(formData.email)
      console.log('email data', emailData)
      console.log('email data with user id', emailData2)
      console.log('user by email', fetchUserByEmail)
      if(isRegister){
        console.log('clicked register', isRegister)
        setTimeout(() => {
          dispatch(findUserByEmail(lastRegisterUser))
          console.log('email data isregister true', emailData2)
          console.log('user by email', fetchUserByEmail)
          dispatch(sendEmailNotification(emailData))
          /* 
          // send with USER ID 
          dispatch(sendEmailNotification(
            {
              userId:fetchUserByEmail[0]?.user_id,
              emailId: fetchUserByEmail[0]?.email
            }
          )) */
        }, 0);
        //dispatch(sendEmailNotification(emailData))
      
      }else{
        console.log('else,initial',isRegister)
      }
    }

    return () => {
      setIsRegister(false);
      //console.log(`Goodbye, ${isRegister}`);
    };

  },[formData,dispatch,fetchUserByEmail])

 

  

  useEffect(() => {
    setItem(getSubprogramId);
  }, [item, getSubprogramId]); 

  //pop up modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (formData !== '' && programId !== '' && courseId !== '') {
      setOpen(true);
      
    }
  };
  return (
    <>
      <div className='row m-0 align-items-center justify-content-center'>
        <div className='col-lg-5 '>
          <img src='img/register-page.png' alt='register page image' className='img-fluid' />
        </div>
        <div className='col-lg-7'>
        <form onSubmit={handleSubmit}>
          <Container maxWidth="sm" className=" d-flex p-0" >
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          
        >
          <div style={{ width: "inherit" }}>
          <Paper elevation={2} sx={{ padding: 5 }} style={{ marginTop: '50px' }}>
                    <h3>Register here</h3>
                    <Grid container spacing={2} sx={{ border: '1px solid rgba(0,0,0,0.125', zIndex: "3" }} style={{ padding: "30px" }}>
                      <Grid item xs={12} md={6}>
                        <TextfieldCustom
                          type="text"
                          name="username"
                          value={username} onChange={handleChange} placeholder="Username"
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextfieldCustom
                          type="email"
                          name="email"
                          value={email} onChange={handleChange} placeholder="Email" />
                      </Grid>
                      {/* <Grid item xs={12} md={6}>
                        <TextfieldCustom
                          type={showPassword ? "text" : "password"}
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
                      </Grid> */}
                      {/* <Grid item xs={12} md={6}>
                        <TextfieldCustom
                          type={showConfirmPassword ? "text" : "password"}
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
                      </Grid> */}
                      <Grid item xs={12}>
                        <TextfieldCustom
                          type="tel"
                          name="phone_number"
                          required
                          value={phone_number} onChange={handleChange} placeholder="Phone Number" />
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
                      {
                        (programId !== '') ?
                          <Grid item xs={12}>
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">SubPrograms</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={subProgramId}
                                defaultValue={subProgramId}
                                label="program"
                                onChange={handleSubProgramChange}
                                required
                              >
                                {item?.map((eachItem, i) => (
                                  <MenuItem
                                    key={eachItem.subprogram_id}
                                    value={eachItem.subprogram_id}
                                  >
                                    {eachItem.subprogram_name}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                          : ""
                      }
                      <Grid item xs={12}>
                        <PopUpModal
                          buttonname={"Register"}
                          buttonClassName="btn btn-primary py-md-3"
                          buttonType="submit"
                          open={open}
                          setOpen={setOpen}
                          handleClose={handleClose}
                          handleOpen={handleOpen}
                          style={{ backgroundColor: '#3251A3', borderColor: '#FF5E14' }}
                          fullWidth
                        />
                        {/* <Button variant="contained" style={{backgroundColor: '#3251A3', borderColor: '#FF5E14'}} 
                    fullWidth type="submit">
                      Register
                    </Button> */}
                      </Grid>
                      <Grid item xs={12}>
                        <Button variant="contained" fullWidth onClick={() => navigate("/login")}>
                          Login If you have account
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
    </>
  );
};

export default RegisterForm;
