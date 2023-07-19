import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link, useNavigate } from 'react-router-dom';

const AdminMenus = () => {
    const navigate = useNavigate()
  return (
    <div className='admin-menus'>
        <Button className='btn-danger' onClick={()=>navigate('/auth/addPromotion')}>Add Promotion</Button>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={()=>navigate('/auth/AdminDashboard')}>All Users</Button>
            <Button onClick={()=>navigate('/auth/allPrograms')}>All Programs</Button>
            <Button onClick={()=>navigate('/auth/addNewProgram')}>Upload Program</Button>
            <Button onClick={()=>navigate('/auth/createNewUser')}>Add New User</Button>
            <Button onClick={()=>navigate('/auth/uploadProgramImage')}>Upload Program Image</Button>
            <Button >Upload Course Image</Button>
            <Button onClick={()=>navigate('/auth/imageGallery')}>View All Images</Button>
        </ButtonGroup>
        {/* <div className='addbutton'>
            <Link to={'/createNewUser'}>Add New User</Link>
        <   Link to={'/addNewProgram'}>Add Program</Link>
        </div> */}
    </div>
  )
}

export default AdminMenus