import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WelcomeMenus from '../../WelcomeMenus';
import UploadPrerequisiteForm from './UploadPrerequisiteForm';

const AddNewPrerequisite = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const userId = user?.role_id
    console.log('logged in as', userId)
  return (
    <div>
        {
            userId === 1 ? (<UploadPrerequisiteForm />)            
            : (
            <>
            <h2>Admin Only can Add Lessons</h2>
            <WelcomeMenus />
            </>
            )
        }
      
    </div>
  )
}

export default AddNewPrerequisite