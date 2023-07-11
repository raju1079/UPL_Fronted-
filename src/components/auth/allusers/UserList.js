import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserById, fetchUserByStatus, getUsersList } from '../../redux/actions/Actions';
import { Box, FormControl, IconButton, InputLabel, MenuItem, Select } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const UserList = (props) => {
    const fetchUsersList = useSelector((state)=> state.getAllUsers.allUsers)
    const fetchUserListByStatus = useSelector((state)=> state.getUserByStatus.userByStatus)
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const userId = user?.role_id
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const[userStatus,setUserStatus]=useState('')
    const[data,setData] = useState('')

    //console.log('all users',fetchUsersList)

    useEffect(()=>{
        setUserStatus(props.status)
        dispatch((getUsersList()))
        dispatch(fetchUserByStatus(userStatus))
     },  [dispatch,fetchUsersList])

     function formatDate(dt){
        const getYear = new Date(dt).getFullYear()
        const getMonth = new Date(dt).getMonth() + 1
        const getMyDay = new Date(dt).getDate()
        const dateFormat = getMyDay + "/" + getMonth + "/" + getYear
        return dateFormat;
    }

    const handleDelete = (id) =>{
        dispatch(deleteUserById(id))
        console.log('clicked User is', id)
    }
   // console.log('users by status', fetchUserListByStatus)

   useEffect(()=>{
    if(userStatus === 'all'){
        setData(fetchUsersList)
    }else{
        setData(fetchUserListByStatus)
    }

}, [userStatus,fetchUsersList,fetchUserListByStatus])

  return (
    <div>
        {
            userId === 1 ? (
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Role</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Status</th>
                    <th scope="col">Submitted Date</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (data.length !== 0 ) ?
                        data.map((eachItem, index)=>(
                            <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td> {eachItem.role_id} </td>
                            <td>{eachItem.email}</td>
                            <td>{eachItem.phone_number}</td>
                            <td>{eachItem.status}</td>
                            <td> {formatDate(eachItem.modify_date)} </td>
                            <td>
                            <IconButton onClick={()=>navigate(`/auth/updateUser/${eachItem.user_id}`)}>
                                <Edit />
                            </IconButton>
                            <IconButton onClick={()=>handleDelete(eachItem.user_id)}>
                                <Delete />
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
            ): ""
        }
    </div>
  )
}

export default UserList