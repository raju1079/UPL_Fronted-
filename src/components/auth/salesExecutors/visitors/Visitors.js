import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVisitorByStatus, getVisitors } from '../../../redux/actions/Actions';
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const statusList = ['Registered','Pending','Completed']

const Visitors = (props) => {
    const fetchVisitors = useSelector((state)=> state.getAllVisitors.visitors)
    const fetchVisitorsByStatus = useSelector((state)=> state.getVisitorsByStatus.visitorByStatus)
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const[userStatus,setUserStatus]=useState('')
    const[data,setData] = useState([])
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

const columns = [
    { field: 'id', headerName: 'Id', width: 60, disableColumnMenu: true, sortable: false },
    { field: 'role', headerName: 'Role', width: 60, sortable: false, disableColumnMenu: true },
    { field: 'email', headerName: 'Email', width: 160, disableColumnMenu: true },
    { field: 'phone_number', headerName: 'Phone Number', width: 160, disableColumnMenu: true },
    { field: 'program_name', headerName: 'Program Name', width: 160, disableColumnMenu: true },
    { field: 'status', headerName: 'Status', width: 140, disableColumnMenu: true, sortable: false },
    { field: 'date', headerName: 'Date', width: 140, disableColumnMenu: true },
    {
        field: 'action',
        headerName: 'Actions',
        width: 180,
        sortable: false,
        disableClickEventBubbling: true,
        
        renderCell: (params) => {
            const onClick = (e) => {
              const currentRow = params.row;
              //return alert(JSON.stringify(currentRow, null, 4));
              navigate(`/auth/updateVisitor/${currentRow.user_id}`)
            };
                        
            return (
              <Stack direction="row" spacing={2}>
                <IconButton onClick={onClick}>
                    <Edit />
                </IconButton>
                
              </Stack>
            );
        },
      }
  ];
  const rows = data?.map((row, index) => {
    return {
      ...row,
      id: index + 1,
      role: row.role_name,
      email: row.email,
      phone_number: row.phone_number,
      program_name: row.program_name,
      status: row.status,
      date: formatDate(row.modify_date)

    }
  });
  function NoRowsOverlay() {
    return (
      <Stack height="100%" alignItems="center" justifyContent="center">
        No rows in DataGrid
        <pre>(rows=&#123;[]&#125;)</pre>
      </Stack>
    );
  }
  
  function NoResultsOverlay() {
    return (
      <Stack height="100%" alignItems="center" justifyContent="center">
        No results in DataGrid
        <pre>(rows=&#123;rowData&#125;)</pre>
        But local filter returns no result
      </Stack>
    );
  }

  return (
    <>
    { 
        userId === 3 ? 
        (<>
                    {
                        (data.length !== 0 ) ?
                        <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />:
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        components={{ NoRowsOverlay, NoResultsOverlay }}
                        initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                        }}
                        
                    />
                    }
        </>) : ""
    }
    </>
  )
}

export default Visitors