import React from 'react'


const SubHeroRight = (props) => {
  return (
    <>
      <div className='sub-hero-right-justify-content-center'>
        <img src="/img/subhero/15.png" alt={`${props.data?.program_name}`} className='img-fluid' />
      </div>
    </>
  )
}

export default SubHeroRight
