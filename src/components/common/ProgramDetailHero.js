import React from 'react'
import SubHeroLeft from './SubHeroLeft'
import SubHeroRight from './SubHeroRight'


const ProgramDetailHero = (props) => {
  return (
    <>
  <div className="container-fluid p-0 homeHero">
          <div className='hero-common-bg'>
                <div className='row m-0 align-items-center'>
                    <div className='col-lg-7 p-0'>
                        <SubHeroLeft data={props.programDetailData} />
                    </div>
                    <div className='col-lg-5 p-0'>
                        <div className='hero-register-form-wrapper'>
                            <SubHeroRight data={props.programDetailData} />
                        </div>
                    </div>
                
                </div>
            </div>
    </div>   
    </>
  )
}

export default ProgramDetailHero
