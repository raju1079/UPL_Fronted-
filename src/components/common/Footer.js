import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getEmailId } from '../redux/actions/Actions'
import { Button, TextField } from '@mui/material'
import { register } from '../redux/auth/authActions'

const Footer = () => {
    const[mail,setMail] = useState('')
    const dispatch = useDispatch()
    const[formData, setFormData] = useState([])
     /* set default values for public visitors who wants to download lessons. same time email id will add in DB users table */
     const phoneNumberFormat = Math.floor(100000000 + Math.random() * 900000000);
     const visitorData = {
        username:"",
        email: mail,
        password: "qwe",
        phone_number: phoneNumberFormat,
          role_id: "2"
      }
      useEffect(()=>{
        setFormData(visitorData)
      },[visitorData])

      const handleSubmit = (e)=>{
        e.preventDefault()
       //console.log("enter mail id is", mail)
        dispatch(register(formData))
        setMail("")        
      }
  return (
    <>
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Quick Link</h4>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Courses</a>
                    <a className="btn btn-link" href="">Pricing</a>
                    <a className="btn btn-link" href="">Downloads</a>
                    <a className="btn btn-link" href="">FAQs & Help</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Contact</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>#123, 70Th Cross, 2Nd Floor, SVA Arcade, 5Th Block Rajajinagara, Bengaluru - 560010
</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 080 23100098</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@uplsnipe.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Newsletter</h4>
                    <p>Subscribe here to get Latest courses and offers</p>
                    <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                        <form onSubmit={handleSubmit}>
                        <TextField 
                        type="email"
                        required
                        name="Enter Your Email id"
                        placeholder='Enter Your Email id'
                        value={mail}
                        onChange={(e)=>setMail(e.target.value)}
                        style={{backgroundColor: "white"}}
                        />
                        
                        <Button className="btn btn-primary py-2 mx-3 top-0 end-0 mt-2 me-2" type='sybmit' >Subscribe</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    </>
  )
}

export default Footer