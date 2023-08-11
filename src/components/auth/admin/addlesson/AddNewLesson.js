import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UploadLessonForm from './UploadLessonForm';
import WelcomeMenus from '../../WelcomeMenus';

const AddNewLesson = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const userId = user?.role_id
    console.log('logged in as', userId)
  return (
    <div>
        {
            userId === 1 ? (<UploadLessonForm />)            
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

export default AddNewLesson