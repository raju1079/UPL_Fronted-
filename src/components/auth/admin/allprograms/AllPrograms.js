import React from 'react'
import { useSelector } from 'react-redux';
import ProgramDataGrid from './ProgramDataGrid';
import WelcomeMenus from '../../WelcomeMenus';

const AllPrograms = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
    const userId = user?.role_id
    console.log('logged in as',userId)
  return (
    <div>
       {
        isAuthenticated && userId === 1 ? (<ProgramDataGrid />) : (
          <WelcomeMenus />
        )

      }
            
    </div>
  )
}

export default AllPrograms