import React from 'react'
import { useSelector } from 'react-redux';
import WelcomeMenus from '../../WelcomeMenus';
import AdminMenus from '../AdminMenus';
import CourseList from './CourseList';

const AllCourses = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
    const userId = user?.role_id
    console.log('logged in as',userId)

  return (
    isAuthenticated && userId === 1 ? (
      <div className="container-xxl ">
    <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3  ">All Courses</h6>
    </div>
    <div className='btn-group mt-3' role='group' aria-label='Button group'>
            <AdminMenus buttonName='Add Course' pageName='addNewCourse' />
          <div className='ms-2'> 
           <AdminMenus buttonName='Add Lesson' pageName='addNewLesson' />
         </div>
         <div className='ms-2'> 
         <AdminMenus buttonName='Add Unit' pageName='addNewUnit' />
        </div>
        <div className='ms-2'> 
         <AdminMenus buttonName='Add Prerequisite' pageName='addNewPrerequisite' />
        </div>
    </div>
          <div className='row dataTable pt-3'>
          <CourseList />
          </div>
          
      </div>
  </div>) : (
        <WelcomeMenus />
      )
  );
}

export default AllCourses