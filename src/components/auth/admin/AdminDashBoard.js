import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import WelcomeMenus from '../WelcomeMenus';
import AllUsersList from './allusers/AllUsersList';

const AdminDashBoard = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const userId = user?.role_id
    console.log('logged in as',userId)
  return (
    <div>
      {
        isAuthenticated && userId === 1 ? (<AllUsersList />) : (
          <WelcomeMenus />
        )

      }
      
    </div>
  )
}

export default AdminDashBoard
