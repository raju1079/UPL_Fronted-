import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, FormControl, IconButton, InputLabel, MenuItem, Select } from '@mui/material';
import { getVisitors } from '../../redux/actions/Actions';
import { Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const statusList = ['Registered','Pending','Completed']

const Visitors = () => {
    const fetchVisitors = useSelector((state)=> state.getAllVisitors.visitors)
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const[userStatus,setUserStatus]=useState('')
  const userId = user?.role_id
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch((getVisitors()))
     },  [dispatch])
        
    // console.log('students from db', fetchVisitors)
    function formatDate(dt){
    const getYear = new Date(dt).getFullYear()
    const getMonth = new Date(dt).getMonth() + 1
    const getMyDay = new Date(dt).getDate()
    const dateFormat = getMyDay + "/" + getMonth + "/" + getYear
    return dateFormat;
}

const handleStatusChange = (e) =>{
    setUserStatus(e.target.value)
}



  return (
    <>
    { 
        userId === 3 ? 
        (<>
        <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Course name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Status</th>
                    <th scope="col">Submitted Date</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fetchVisitors.map((eachItem, index)=>(
                            <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>Course Name</td>
                            <td>{eachItem.email}</td>
                            <td>{eachItem.phone_number}</td>
                            <td> Registered
                            {/* <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={userStatus[index]}
                                    label="Status"
                                    
                                    onChange={(ev) => setUserStatus({[ev.target.name]:ev.target.value})}
                                    >
                                        {
                                            statusList.map((eachStatus,i)=>(
                                                <MenuItem key={i} value={eachStatus}>{eachStatus}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                                </Box> */}
                            </td>
                            <td> {formatDate(eachItem.modify_date)} </td>
                            <td>
                                <IconButton onClick={()=>navigate(`/auth/updateUser/${eachItem.user_id}`)}>
                                    <Edit />
                                </IconButton>
                            </td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
        </>) : ""
    }
    </>
  )
}

export default Visitors