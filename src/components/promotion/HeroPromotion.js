import React from 'react'
import { useEffect, useState } from 'react';
import axiosinstance from '../../api/axiosinstance';
import HeroPromotionContent from './HeroPromotionContent'
import HeroPromotionForm from './HeroPromotionForm'

const HeroPromotion = () => {
  const[activePromotion,setActivePromotion] = useState([])

  useEffect(()=>{   
    try{
       // const response = axiosinstance.get('/promotions/active')
       const response = axiosinstance.get('api/promotions/active/event')
        .then((res)=>{
            const promotion = res.data;
            setActivePromotion(promotion)
        })
    }   catch(err){
        console.log(err)
    }  
  }, [])
  console.log('current promotion is', activePromotion[0])
  return (
    <>
        <div className="container-fluid p-0 homeHero">
          <div className='hero-common-bg'>
                <div className='row m-0'>
                    <div className='col-lg-7 p-0'>
                        <HeroPromotionContent data={activePromotion} />
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