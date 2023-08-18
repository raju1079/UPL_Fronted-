import React from 'react'
import { useSelector } from 'react-redux';
import AddPromotionForm from './AddPromotionForm';
import WelcomeMenus from '../../WelcomeMenus';
import AdminMenus from '../AdminMenus';

const AddPromotion = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const userId = user?.role_id
  return (
    <div>
         {
            userId === 1 ?
            <>
           <div className="container-xxl">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Add New Promotion</h6>
                        {/* <h1 className="mb-5">Upload Promotion</h1> */}
                    </div>
                    <div className='mb-3'>
                        <AdminMenus />
                    </div>
                        <AddPromotionForm />
                </div>
           </div>     
            </>    
            : <WelcomeMenus />
        }
    </div>
  )
}

export default AddPromotion