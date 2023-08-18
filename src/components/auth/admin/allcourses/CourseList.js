import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  fetchCourseList,deleteCourseById } from '../../../redux/actions/Actions';
import { useNavigate } from 'react-router-dom';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Delete, Edit } from '@mui/icons-material';
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, Stack } from '@mui/material';




const CourseList = () => {
    const fetchCourses = useSelector((state)=> state.fetchAllCourses.courses)
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const userId = user?.role_id
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const[dataRows,setDataRows] = useState('')
    const[dataColumns,setDataColumns]=useState([])
    const[data,setData] = useState([])




    function formatDate(dt){
      const getYear = new Date(dt).getFullYear()
      const getMonth = new Date(dt).getMonth() + 1
      const getMyDay = new Date(dt).getDate()
      const dateFormat = getMyDay + "/" + getMonth + "/" + getYear
      return dateFormat;
  }


    const columns = [
        { field: 'id', headerName: 'Id', width: 60, disableColumnMenu: true, sortable: false },
        { field: 'course_name', headerName: 'Course Name', width: 160, disableColumnMenu: true },
       /*  { field: 'instructor_id', headerName: 'Instructor Id', width: 80, sortable: false, disableColumnMenu: true }, */
        { field: 'description', headerName: 'Description', width: 160, disableColumnMenu: true },
        { field: 'duration', headerName: 'Duration', width: 160, disableColumnMenu: true },
        {
            field: 'action',
            headerName: 'Actions',
            width: 180,
            sortable: false,
            disableClickEventBubbling: true,
            
            renderCell: (params) => {
                const onClick = (e) => {
                  const currentRow = params.row;
                  navigate(`/AdminCp/updateCourse/${currentRow.course_id}`)
                };
                 const handleDelete = (e) =>{
                    const currentRow = params.row;
                    dispatch(deleteCourseById(currentRow.course_id))
                    console.log('clicked Course is', currentRow.course_id)
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
          course_name: row.course_name,
         /*  instructor_id: row.instructor_id, */
          description: row.description,
          duration: row.duration,
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

  //console.log('courses', fetchCourses)

  

  useEffect(() => {
    dispatch(fetchCourseList())
  }, [ dispatch,fetchCourses]);

  //console.log('courses', fetchCourses)

  

  useEffect(()=>{
    setData(fetchCourses)
    setDataColumns(columns)
    setDataRows(rows)
}, [data])

  return (
    <div className='course-list'>
        {
            userId === 1 ? (
                
                (fetchCourses.length !== 0 ) ?
                <DataGrid
                    rows={dataRows}
                    columns={dataColumns}
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10},
                    },
                    }}
                    pageSizeOptions={[10, 20]}
                    checkboxSelection
                />:
                <DataGrid
                    rows={rows}
                    columns={columns}
                   components={{ NoRowsOverlay, NoResultsOverlay }} 
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    }
                    }}
                    
                /> ): ""
        }
    </div>
  )
}

export default CourseList