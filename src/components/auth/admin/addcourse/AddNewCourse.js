import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UploadCourseForm from './UploadCourseForm';
import WelcomeMenus from '../../WelcomeMenus';

const AddNewCourse = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const userId = user?.role_id
    console.log('logged in as', userId)
  return (
    <div>
        {
            userId === 1 ? (<UploadCourseForm />)            
            : (
            <>
            <h2>Admin Only can Add Programs</h2>
            <WelcomeMenus />
            </>
            )
        }
      
    </div>
  )
}

export default AddNewCourse