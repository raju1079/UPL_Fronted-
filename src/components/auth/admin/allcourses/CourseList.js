import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import {  fetchCourseList } from '../../../redux/actions/Actions';
import { useNavigate } from 'react-router-dom';



const CourseList = () => {
    const fetchCourses = useSelector((state)=> state.fetchAllCourses.courses)
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const userId = user?.role_id
    const [item, setItem] = useState([]);
    const navigate = useNavigate()
    const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCourseList())
   // setItem(fetchCourses)
    
  }, [ dispatch]);

  //console.log('courses', fetchCourses)

    const handleDelete = (id) =>{
        console.log('clicked course is', id)
    }

  return (
    <div>
        {
            userId === 1 ? (
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Course Name</th>
                    <th scope="col">Instructor name</th>
                    <th scope="col">Course Description</th>
                    <th scope="col">Duration</th>
                    <th scope="col" colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fetchCourses.map((eachItem, index)=>(
                            <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td> {eachItem.course_name} </td>
                            <td>{eachItem.instructor_name}</td>
                            <td>{eachItem.description}</td>
                            <td>{eachItem.duration}</td>
                            <td> <Button onClick={()=>navigate(`/AdminCp/updateProgram/${eachItem.program_id}`)}>Edit</Button> </td>
                            <td> <Button onClick={()=>handleDelete(eachItem.program_id)}>Delete</Button> </td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
            ): ""
        }
    </div>
  )
}

export default CourseList