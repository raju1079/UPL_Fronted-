import {  useSelector } from 'react-redux'
import UploadUnitForm from './UploadUnitForm';
import WelcomeMenus from '../../WelcomeMenus';

const AddNewUnit = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const userId = user?.role_id
    console.log('logged in as', userId)
  return (
    <div>
        {
            userId === 1 ? (<UploadUnitForm />)            
            : (
            <>
            <h2>Admin Only can Add Units</h2>
            <WelcomeMenus />
            </>
            )
        }
      
    </div>
  )
}

export default AddNewUnit 