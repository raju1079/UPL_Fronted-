import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import {
  Avatar,
  Box,
  Collapse,
  ListItemAvatar,
  Tooltip,
  Typography
} from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import IconButton from "@mui/material/IconButton";
import {
  Dashboard ,
  Group ,
  ArrowRight,
  ArrowDropUp,
  Notifications,
  Payment,
  ExpandLess,
  ExpandMore,
  ImageRounded,
  VerifiedUser,
  Category,
  GolfCourse,
  Event,
  AdsClick,
  Subscriptions,
} from "@mui/icons-material";
import AdminData from "../../../data/Admindata.json";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const SideBarCp = ({ open, handleDrawerClose,theme }) => {
    const [items, setItems] = useState();
  const [displayImg, setdisplayImg] = useState("");

  const isSmallScreen = window.innerWidth < 600;
  const navigate = useNavigate();
  const sidebarlist = AdminData.adminsidebarmenu;
  const iconList = {
    VerifiedUser,
    Category,
    GolfCourse,
    Category,
    Event,
    AdsClick,
    ImageRounded,
    MailIcon,
  };
  
  return (
    <>
        <Drawer variant="permanent" open={open}>
        <DrawerHeader> 
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
       
        <List>
          {sidebarlist.map((menu, index) => (
            <Tooltip
            key={menu.key}
            title={open ? "" : menu.title}
            placement="right"
            enterTouchDelay={0}
            enterDelay={500}
          >
            <ListItem key={menu.key} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                component={Link}
                to={menu.link}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  
                  {React.createElement(iconList[menu.icon])}
                </ListItemIcon>
                <ListItemText primary={menu.title} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </Tooltip>  
          ))
          }
        </List>
        
      </Drawer>
     
      <Box
        component="main"
        className="sidemuicontainer"
      >
        <DrawerHeader />
        <Outlet />
      </Box>
      
    </>
  )
}

export default SideBarCp