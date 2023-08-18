import { Backpack, CategoryOutlined, Landscape, LocationCity, Output, Payment, Person, Person2Outlined, PriceChange, PriceCheck, QuestionAnswer, } from '@mui/icons-material'
import { Box, Button, Container, Grid, Icon, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import LogoutButton from './LogoutButton.js';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import TopbarUser from '../common/TopbarUser.js';
import WelcomeMenus from './WelcomeMenus.js';
import AdminDashBoard from './admin/AdminDashBoard.js';
import ExecutorDashboard from './salesExecutors/ExecutorDashboard.js';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Welcome = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const userId = user?.role_id
  const navigate = useNavigate()
  const dispatch = useDispatch();

const iconFontSize = {
fontSize: "90px"
}
const userAccountMenus = [
{
  id: 1,
  name: "Program Details",
  navLink: "/#",
  icon: <CategoryOutlined sx={iconFontSize} />
},
{
  id: 2,
  name: "Enquiries",
  navLink: "/#",
  icon: <QuestionAnswer sx={iconFontSize} />
},
{
  id: 3,
  name: "Student Details",
  navLink: "/#",
  icon: <Person2Outlined sx={iconFontSize} />
}

]

  return (
    
    <div>
      {isAuthenticated ? (
        <>
        
         {/*  <h1>Welcome, {user.username} <span> {user.role_id} </span></h1>
          <LogoutButton /> */}
          {
            userId === 1 ? <AdminDashBoard /> : userId === 3 ? <ExecutorDashboard /> : ""
          }
          <div className='container'>
            <h2>Your Account</h2>
            <div className="container-xxl py-5">
                <div className="container">
                  <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                      <h6 className="section-title bg-white text-center text-primary px-3">Visitors Reports</h6>
                      <h1 className="mb-5">Status Reports</h1>
                  </div>
                  <div className='row'>
                    {/* related component will come here */}
                  </div>
                  </div>
            </div>
            {/* <Box sx={{ flexGrow: 1 }} className="mb-5 profiledashboard">        
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4}>
                    <h3>Registered data</h3>
                </Grid>
                
              </Grid>
          </Box> */}
          </div>   
        </>
      ) : (
        <>
        <WelcomeMenus />  
          
        </>
      )}
    </div>
    
  );
};

export default Welcome;
