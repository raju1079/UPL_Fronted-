import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/auth/authActions';




//top bar mui
//const pages = ['Products', 'Pricing', 'Blog'];
const pages = [];
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const userMenus = [
    /* {
    menu: "Your Account",
    link: "/#"
    },
    {
      menu: "Change Picture",
      link: "/UpdateProfilepic"
    },
    {
      menu: "Change Password",
      link: "/#"
    },
    {
        menu: "Dashboard",
        link: "/"
    }    */ 
]

const TopbarUser = () => {
  const { loginDetails, user} = useSelector((state) => state.auth)
    const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const history = useNavigate()
  const dispatch = useDispatch();  
  const [displayImg, setdisplayImg] = useState("");
    

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlelogout = (e) =>{
    e.preventDefault();
    
    dispatch(logout());
    history('/')
   // console.log("header nav click fn")
  }

  useEffect(()=>{
    const fetchProfilePicById = async () =>{
      try{
        setdisplayImg("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
      }catch (err){
          console.log(err)
       }
    }
    fetchProfilePicById();
    
    
    }, []) 

  return (
    <div className='userTopbar'>
        <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Your Account">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Typography>
            Welcome {user?.username}
          </Typography>
                <Avatar alt="User Profile" src={displayImg} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {userMenus.map((eachMenu) => (
                <MenuItem key={eachMenu.menu} onClick={handleCloseUserMenu}>
                  {/* <Typography textAlign="center">{setting}</Typography> */}
                  <Typography>
                    <Link to={eachMenu.link}>{eachMenu.menu}</Link>
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handlelogout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  )
}

export default TopbarUser