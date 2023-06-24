import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import UpdateUserForm from './UpdateUserForm';
import UpdateVisitor from '../visitors/UpdateVisitor';

const UpdateUser = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const userId = user?.role_id
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log('logged in as', userId)

  return (
    <div>
        {
            userId === 1 ? <UpdateUserForm /> : userId === 3 ? <UpdateVisitor /> : <h2>Please Login</h2>
        }
    </div>
  );
};

export default UpdateUser