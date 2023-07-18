import React from 'react'
import UploadImageForm from './UploadImageForm'
import ImageGallery from './ImageGallery'
import WelcomeMenus from '../../WelcomeMenus';
import { useSelector } from 'react-redux';
import AdminMenus from '../AdminMenus';

const UploadImage = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const userId = user?.role_id
  return (
    <div>
        {
            userId === 1 ?
       <>
       <div className='mb-3'>
        <AdminMenus />
       </div>
        <UploadImageForm />
       </>    
       : <WelcomeMenus />
        }
    </div>
  )
}

export default UploadImage
