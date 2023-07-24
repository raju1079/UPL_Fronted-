import React from 'react'
import { useSelector } from 'react-redux';
import WelcomeMenus from '../../WelcomeMenus';

const MakeCategory = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
    const userId = user?.role_id
    console.log('logged in as',userId)
  return (
    <div>
       {
        isAuthenticated && userId === 1 ? ("Program Category list") : (
          <WelcomeMenus />
        )

      }
            
    </div>
  )
}

export default MakeCategory