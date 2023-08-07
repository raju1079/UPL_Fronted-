import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux'
import { deleteSubscriberById, getAllSubscribers } from '../../redux/actions/Actions'
import { useNavigate } from 'react-router-dom';

const SubscribersList = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const fetchSubscribers = useSelector((state)=> state.getAllSubscribersNprogram.subscribersWithProgram)
    
    const userId = user?.role_id
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const[data,setData] = useState([])
    const[dataRows,setDataRows] = useState('')
    const[dataColumns,setDataColumns]=useState([])

    function formatDate(dt){
        const getYear = new Date(dt).getFullYear()
        const getMonth = new Date(dt).getMonth() + 1
        const getMyDay = new Date(dt).getDate()
        const dateFormat = getMyDay + "/" + getMonth + "/" + getYear
        return dateFormat;
    }

    // data grid columns/rows
    const columns = [
        { field: 'id', headerName: 'Id', width: 60, disableColumnMenu: true, sortable: false },
        { field: 'subscriber_name', headerName: 'Name', width: 160, sortable: true, disableColumnMenu: true },
        { field: 'email', headerName: 'Email', width: 160, disableColumnMenu: true },
        { field: 'phone_number', headerName: 'Phone Number', width: 160, disableColumnMenu: true },
        { field: 'program_name', headerName: 'Program Name', width: 160, disableColumnMenu: true },
        { field: 'registered_date', headerName: 'Date', width: 140, disableColumnMenu: true },
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
                 // navigate(`/AdminCp/updateUser/${currentRow.subscriber_id}`)
                 console.log('clicked User is', currentRow.subscriber_id)
                };
                const handleDelete = (e) =>{
                    const currentRow = params.row;
                    dispatch(deleteSubscriberById(currentRow.subscriber_id))
                    console.log('clicked User is', currentRow.subscriber_id)
                }
                
                return (
                  <Stack direction="row" spacing={2}>
                    <IconButton onClick={onClick}>
                        <Edit />
                    </IconButton>
                    <IconButton onClick={()=>handleDelete()}>
                        <Delete />
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
          subscriber_name: row.subscriber_name,
          email: row.email,
          phone_number: row.phone_number,
          program_name: row.subprogram_name, // to display program name use program_name
          registered_date: formatDate(row.registered_date)
    
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

    useEffect(()=>{
        dispatch(getAllSubscribers())
        
    }, [dispatch])

    useEffect(()=>{
      setData(fetchSubscribers)
      setDataColumns(columns)
      setDataRows(rows)
    }, [fetchSubscribers])
   // console.log('subscribers with program name', rows)
  return (
    <div>
        {
            userId === 1 ? (
                
                        (data.length !== 0 ) ?
                        <DataGrid
                            rows={dataRows}
                            columns={dataColumns}
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
                            }
                            }}
                            
                        />
                    
            ): ""
        }
    </div>
  )
}

export default SubscribersList