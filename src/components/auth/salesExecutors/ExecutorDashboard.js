import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import WelcomeMenus from '../WelcomeMenus';
import DataTabs from '../visitors/DataTabs';

const ExecutorDashboard = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return (
    <div>
      {
        isAuthenticated ? (<DataTabs />) : (
          <WelcomeMenus />
        )

      }
      
    </div>
  )
}

export default ExecutorDashboard
