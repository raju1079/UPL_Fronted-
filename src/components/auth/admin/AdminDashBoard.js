import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AllUsersList from '../allusers/AllUsersList';
import WelcomeMenus from '../WelcomeMenus';

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
