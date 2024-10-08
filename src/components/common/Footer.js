import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getEmailId } from '../redux/actions/Actions'
import { Box, Button, Grid, TextField } from '@mui/material'
import { register } from '../redux/auth/authActions'
import { Link } from 'react-router-dom'
import PopUpModal from './PopUpModal'

const Footer = () => {
    const[mail,setMail] = useState('')
    const dispatch = useDispatch()
    const[formData, setFormData] = useState([])
    const[mobile,setMobile] = useState('')

    //pop up modal
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if(mail !== "" && mobile !== ""){
        setOpen(true)
    }
  }
  const handleClose = () => setOpen(false);
     
     const visitorData = {
        username:"",
        email: mail,
        password: "qwe",
        phone_number: mobile,
          role_id: "2"
      }
      useEffect(()=>{
        setFormData(visitorData)
      },[visitorData])

      const handleSubmit = (e)=>{
        e.preventDefault()
       //console.log("enter mail id is", mail)
        if(mail !== "" && mobile !== ""){
            dispatch(register(formData))
        }
        setMail("")
        setMobile("")        
      }
  return (
    <>
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Quick Link</h4>
                    <Link className="btn btn-link" to="/about">About Us</Link>
                    <Link className="btn btn-link" to="/programs">Programs</Link>
                    <Link className="btn btn-link" to="/contact">Pricing</Link>
                    <Link className="btn btn-link" to="programs">Downloads</Link>
                    <Link className="btn btn-link" to="/">FAQs & Help</Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Contact</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>#15/4, 1st Floor, Vishwamanava Double Road, Kuvempu Nagara, Mysuru, Karnataka 570023
</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 97392 01041</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>hr@uplsnipe.com</p>
                    <div className="d-flex pt-2">
                        {/* <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a> */}
                        <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/profile.php?id=100091713887746" target='_blank'><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social" href="https://youtube.com/@uplsnipe" target='_blank'><i className="fab fa-youtube" ></i></a>
                        <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/company/upl-snipe/" target='_blank'><i className="fab fa-linkedin-in" ></i></a>
                        <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/uplsnipe/?igshid=NjIwNzIyMDk2Mg%3D%3D" target='_blank'><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                
                <div className="col-lg-5 col-md-6">
                    <h4 className="text-white mb-3">Newsletter</h4>
                    <p>Subscribe here to get Latest courses and offers</p>
                    <div className="position-relative mx-auto" >
                        <form onSubmit={handleSubmit}>
                        <Box mb={2}>
                            <Grid container spacing={2}>
                                <Grid item md={6} xs={12} sm={12}>
                                <TextField 
                                type="email"
                                required
                                name="Enter Your Email id"
                                placeholder='Enter Your Email id'
                                value={mail}
                                onChange={(e)=>setMail(e.target.value)}
                                style={{backgroundColor: "white"}}
                                />                                
                                </Grid>
                                <Grid item md={6} xs={12} sm={12}>
                                <TextField 
                                type="tel"
                                required
                                name="Enter Your Mobile Number"
                                placeholder='Enter Mobile Number'
                                value={mobile}
                                onChange={(e)=>setMobile(e.target.value)}
                                style={{backgroundColor: "white"}}
                                />
                                </Grid>
                            </Grid>
                        </Box>
                        
                        {/* <Button className="btn btn-primary py-2 mx-3 top-0 end-0 mt-2 me-2" type='sybmit' >Subscribe</Button> */}
                        <PopUpModal 
                        buttonname={"Subscribe"} 
                        buttonClassName="btn btn-primary py-2 mx-3 top-0 end-0 mt-2 me-2"
                        buttonType="submit"
                        open={open}
                        setOpen={setOpen}
                        handleClose={handleClose}
                        handleOpen={handleOpen}
                        />
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