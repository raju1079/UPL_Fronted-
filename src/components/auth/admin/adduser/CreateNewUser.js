import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NewUserForm from './NewUserForm';
import WelcomeMenus from '../../WelcomeMenus';


const CreateNewUser = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const userId = user?.role_id
    console.log('logged in as', userId)
  return (
    <div>
        {
            userId === 1 ? <NewUserForm />            
            : (
            <>
            <h2>Admin Only can create new User</h2>
            <WelcomeMenus />
            </>
            )
        }
      
    </div>
  )
}

export default CreateNewUser
