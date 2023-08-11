import React from 'react'
import AdminMenus from '../AdminMenus'
import WelcomeMenus from '../../WelcomeMenus';
import { useSelector } from 'react-redux';
import ImageTable from './ImageTable';

const ImageManagement = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const userId = user?.role_id
  return (
    <div>
        {
            userId === 1 ? <>
        <div className="container-xxl">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Image controls</h6>
                </div>
                <div className='mb-3'>
                <AdminMenus buttonName='Upload Image' pageName='uploadImage' />
                <ImageTable />
                </div>
            </div>
        </div>  
        </>
        : <WelcomeMenus />
        }
    </div>  
  )
}

export default ImageManagement
