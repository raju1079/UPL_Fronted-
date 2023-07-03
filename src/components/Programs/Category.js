import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SubHero from '../common/SubHero'
import ProgramCard from './ProgramCard'
import jsondata from '../../data/data.json'
import { useLocation, useNavigate } from 'react-router-dom'
import { fetchProgramList } from '../redux/actions/Actions';

const Category = () => {
    const fetchPrograms = useSelector((state)=> state.fetchAllPrograms.programs)
    const navigate = useNavigate()
    const location = useLocation()
const breadCrumb = location.pathname
const [programs, setPrograms] = useState([])
const dispatch = useDispatch()
  //console.log(location.pathname)
  useEffect(()=>{
    dispatch(fetchProgramList())
 },  [dispatch])

 
  
 //console.log('programlist from db', fetchPrograms)
  //console.log('json ', programs)
  return (
    <>
    <div className="container-xxl py-5 category" id='category'>
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Categories</h6>
                <h1 className="mb-5">Courses Categories</h1>
                <h6 className="section-title bg-white text-center text-primary px-3">*Terms and Conditions are subjected to further discussion before signing the legal agreement</h6>
            </div>
            <div className="row g-3">
                <div className="col-lg-7 col-md-6">
                    <div className="row g-3">
                        <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s" onClick={()=>navigate(`/programDetail/${fetchPrograms[0].program_id}`)}>
                            <a className="position-relative d-block overflow-hidden" href="">
                                <img className="img-fluid" src={`img/programs/${fetchPrograms[0]?.program_name}.png`} alt="" />
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: "1px"}}>
                                    <h5 className="m-0">{fetchPrograms[0]?.program_name}</h5>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s" onClick={()=>navigate(`/programDetail/${fetchPrograms[1].program_id}`)}>
                            <a className="position-relative d-block overflow-hidden" href="">
                                <img className="img-fluid" src={`img/programs/${fetchPrograms[1]?.program_name}.png`} alt="" />
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: "1px"}}>
                                    <h5 className="m-0">{fetchPrograms[1]?.program_name}</h5>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s" onClick={()=>navigate(`/programDetail/${fetchPrograms[2].program_id}`)}>
                            <a className="position-relative d-block overflow-hidden" href="">
                                <img className="img-fluid" src={`img/programs/${fetchPrograms[2]?.program_name}.png`} alt="" />
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: "1px"}}>
                                    <h5 className="m-0">{fetchPrograms[2]?.program_name}</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{minHeight: "350px"}} onClick={()=>navigate(`/programDetail/${fetchPrograms[3].program_id}`)}>
                    <a className="position-relative d-block h-100 overflow-hidden" href="">
                        <img className="img-fluid position-absolute w-100 h-100" src={`img/programs/${fetchPrograms[3]?.program_name}.png`} alt="" style={{objectFit: "cover"}} />
                        <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin:  "1px"}}>
                            <h5 className="m-0">{fetchPrograms[3]?.program_name}</h5>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>      
    
    </>
  )
}

export default Category