import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import AdminMenus from '../AdminMenus';
import CourseList from './CourseList';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Grid>{children}</Grid>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CourseDataGrid = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">All Courses</h6>
                {/* <h1 className="mb-5">All Courses</h1> */}
            </div>
            <div className='mb-3'>
              <AdminMenus buttonName='Add Course' pageName='addNewCourse' />
            </div>
            <div className='row dataTable'>
            <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                    <Tab label="All Records" {...a11yProps(0)} />                    
                    </Tabs>                    
                </Box>
                <TabPanel value={value} index={0} >
                    <CourseList />
                </TabPanel>                
               </Paper> 
            </Box>            
            </div>
            
        </div>
    </div>
    
  );
}

export default CourseDataGrid