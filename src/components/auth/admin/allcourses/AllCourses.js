import React from 'react'
import { useSelector } from 'react-redux';
import CourseDataGrid from './CourseDataGrid';
import WelcomeMenus from '../../WelcomeMenus';

const AllCourses = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
    const userId = user?.role_id
    console.log('logged in as',userId)
  return (
    <div>
       {
        isAuthenticated && userId === 1 ? (<CourseDataGrid />) : (
          <WelcomeMenus />
        )

      }
            
    </div>
  )
}

export default AllCourses