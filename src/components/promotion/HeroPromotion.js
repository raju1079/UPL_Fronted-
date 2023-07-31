import React from 'react'
import { useEffect, useState } from 'react';
import axiosinstance from '../../api/axiosinstance';
import HeroPromotionContent from './HeroPromotionContent'
import HeroPromotionForm from './HeroPromotionForm'
import { useDispatch, useSelector } from 'react-redux';
import { getActivePromotionEvent } from '../redux/actions/Actions';

const HeroPromotion = () => {
    const currentActivePromotionEvent = useSelector((state)=> state.fetchActivePromotionEvent.activePromotionEvent)
    const dispatch = useDispatch()
    const[activePromotion,setActivePromotion] = useState([])

  useEffect(()=>{   
    dispatch(getActivePromotionEvent())
       //setActivePromotion(currentActivePromotionEvent) 
  }, [dispatch])
  console.log('current promotion is', currentActivePromotionEvent)
  return (
    <>
        <div className="container-fluid p-0 homeHero">
          <div className='hero-common-bg'>
                <div className='row m-0'>
                    <div className='col-lg-7 p-0'>
                        <HeroPromotionContent data={currentActivePromotionEvent} />
                    </div>
                    <div className='col-lg-5 p-0'>
                        <div className='hero-register-form-wrapper'>
                            <HeroPromotionForm />
                        </div>
                    </div>
                
                </div>
            </div>
    </div> 
    </>
  )
}

export default HeroPromotion