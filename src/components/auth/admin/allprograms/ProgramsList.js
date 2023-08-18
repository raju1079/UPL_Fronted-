import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { deleteProgramById, fetchProgramList } from '../../../redux/actions/Actions';
import { useNavigate } from 'react-router-dom';



const ProgramsList = () => {
    const fetchPrograms = useSelector((state)=> state.fetchAllPrograms.programs)
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const userId = user?.role_id
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //console.log('all programs',fetchPrograms)

    useEffect(()=>{
        dispatch(fetchProgramList())
     },  [dispatch, fetchPrograms])

     function formatDate(dt){
        const getYear = new Date(dt).getFullYear()
        const getMonth = new Date(dt).getMonth() + 1
        const getMyDay = new Date(dt).getDate()
        const dateFormat = getMyDay + "/" + getMonth + "/" + getYear
        return dateFormat;
    }

    const handleDelete = (id) =>{
        dispatch(deleteProgramById(id))
        console.log('clicked program is', id)
    }

  return (
    <div>
        {
            userId === 1 ? (
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Program Name</th>
                    <th scope="col">Registeration Charge</th>
                    <th scope="col">Program Details</th>
                    <th scope="col" colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fetchPrograms.map((eachItem, index)=>(
                            <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td> {eachItem.program_name} </td>
                            <td>{eachItem.registration_charge}</td>
                            <td>{eachItem.program_details}</td>
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

export default ProgramsList