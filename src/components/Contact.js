import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="container-xxl py-5" id='about'>
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight: "400px"}}>
                    <div className="position-relative h-100">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3887.8144853206486!2d77.55230926474037!3d12.983714390847918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssnipe%20tech%20pvt%20ltd%20bangalore!5e0!3m2!1sen!2sin!4v1671621612946!5m2!1sen!2sin" style={{border:"2px", width:"100%", height:"100%"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 className="section-title bg-white text-start text-primary pe-3">For queries...</h6>
                    <h1 className="mb-4">Contact us here</h1>
                    
                    <h4 className="text-white mb-3">Contact</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>#15/4, 1st Floor, Vishwamanava Double Road, Kuvempu Nagara, Mysuru, Karnataka 570023
</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 97392 01041</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>hr@uplsnipe.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    
                    
                    <a className="btn btn-primary py-3 px-5 mt-2" href="">Register Here</a>
                </div>
            </div>
        </div>
    </div>       
    </>
  )
}

export default Contact
