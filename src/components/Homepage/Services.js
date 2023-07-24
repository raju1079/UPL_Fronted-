import React from 'react'

const Services = () => {
  return (
    <>
     <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-4 servicesCardWrapper">
                <div className="col-lg-3 col-sm-6 wow fadeInUp servicesCard" data-wow-delay="0.1s">
                    <div className="service-item text-center pt-3 h-100">
                        <div className='service-item-badge-container'>
                            <div className='service-item-badge'>
                                <div></div>
                            </div>
                        </div>
                        <div className="p-4">
                            <i className="fa fa-3x fa-graduation-cap mb-4"></i>
                            <h5 className="mb-3">Skilled Instructors</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp servicesCard" data-wow-delay="0.3s">
                    <div className="service-item text-center pt-3 h-100">
                    <div className='service-item-badge-container'>
                            <div className='service-item-badge'>
                                <div></div>
                            </div>
                        </div>
                        <div className="p-4">
                            <i className="fa fa-3x fa-globe mb-4"></i>
                            <h5 className="mb-3">Online Classes</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp servicesCard" data-wow-delay="0.5s">
                    <div className="service-item text-center pt-3 h-100">
                    <div className='service-item-badge-container'>
                            <div className='service-item-badge'>
                                <div></div>
                            </div>
                        </div>
                        <div className="p-4">
                            <i className="fa fa-3x fa-home mb-4"></i>
                            <h5 className="mb-3">Real time Projects</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp servicesCard" data-wow-delay="0.7s">
                    <div className="service-item text-center pt-3 h-100">
                    <div className='service-item-badge-container'>
                            <div className='service-item-badge'>
                                <div></div>
                            </div>
                        </div>
                        <div className="p-4">
                            <i className="fa fa-3x fa-book-open mb-4"></i>
                            <h5 className="mb-3">Material Access</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>      
    </>
  )
}

export default Services
