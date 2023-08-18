import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios';
import { getImagesTable } from '../../../redux/actions/Actions';

const ImageTable = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const getImageTable = useSelector((state) => state.loadImageTable.imageTable)
    const userId = user?.role_id
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [imagesAWS, setImagesAWS] = useState([]);

    function formatDate(dt){
        const getYear = new Date(dt).getFullYear()
        const getMonth = new Date(dt).getMonth() + 1
        const getMyDay = new Date(dt).getDate()
        const dateFormat = getMyDay + "/" + getMonth + "/" + getYear
        return dateFormat;
    }
       
    console.log('images',imagesAWS)

    const columns = [
        { field: 'id', headerName: 'Id', width: 60, disableColumnMenu: true, sortable: false },
        { field: 'file_name', headerName: 'Image Name', width: 160, sortable: false, disableColumnMenu: true },
        { field: 'image_id', headerName: 'Image Id', width: 80, disableColumnMenu: true },
        { field: 'file_path', headerName: 'Image Path', width: 160, disableColumnMenu: true },
        { field: 'program_name', headerName: 'Program Name', width: 160, disableColumnMenu: true },
        { field: 'course_name', headerName: 'Course Name', width: 160, disableColumnMenu: true, sortable: false },
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
                  //navigate(`/AdminCp/updateUser/${currentRow.image_id}`)
                  console.log('clicked User is', currentRow.image_id)
                };
                const handleDelete = (e) =>{
                    const currentRow = params.row;
                    //dispatch(deleteUserById(currentRow.user_id))
                    console.log('clicked User is', currentRow.image_id)
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
      const rows = imagesAWS?.map((row, index) => {
        return {
          ...row,
          id: index + 1,
          file_name: row.file_name,
          image_id: row.image_id,
          file_path: row.file_path,
          program_name: row.program_name,
          course_name: row.course_name,
          date: formatDate(row.created_at)
    
        }
      });
      useEffect(() => {
       dispatch(getImagesTable());
       setImagesAWS(getImageTable)
    }, [dispatch]);

  return (
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
        pagination: {
            paginationModel: { page: 0, pageSize: 5 },
        },
        }}
        pageSizeOptions={[5, 10]}
        
    />
    </div>
  )
}

export default ImageTable
