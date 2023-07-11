import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, FormControl, IconButton, InputLabel, MenuItem, Select } from '@mui/material';
import { getVisitorByStatus, getVisitors } from '../../redux/actions/Actions';
import { Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const statusList = ['Registered','Pending','Completed']

const Visitors = (props) => {
    const fetchVisitors = useSelector((state)=> state.getAllVisitors.visitors)
    const fetchVisitorsByStatus = useSelector((state)=> state.getVisitorsByStatus.visitorByStatus)
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const[userStatus,setUserStatus]=useState('')
    const[data,setData] = useState('')
  const userId = user?.role_id
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        setUserStatus(props.status)
        dispatch(getVisitorByStatus(userStatus))
        dispatch((getVisitors()))
     },  [dispatch,fetchVisitorsByStatus])
        
    //console.log('students from db', fetchVisitorsByStatus)
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

useEffect(()=>{
    if(userStatus === 'all'){
        setData(fetchVisitors)
    }else{
        setData(fetchVisitorsByStatus)
    }

}, [userStatus,fetchVisitors,fetchVisitorsByStatus])

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
                        (data.length !== 0 ) ?
                         data.map((eachItem, index)=>(
                            <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>Course Name</td>
                            <td>{eachItem.email}</td>
                            <td>{eachItem.phone_number}</td>
                            <td> {eachItem.status}</td>
                            <td> {formatDate(eachItem.modify_date)} </td>
                            <td>
                                <IconButton onClick={()=>navigate(`/auth/updateUser/${eachItem.user_id}`)}>
                                    <Edit />
                                </IconButton>
                            </td>
                            </tr>
                        )) :
                        <tr>
                            <td colspan='6'><h2>No users found with this status {userStatus}</h2></td>
                        </tr>
                    }
                </tbody>
                </table>
        </>) : ""
    }
    </>
  )
}

export default Visitors