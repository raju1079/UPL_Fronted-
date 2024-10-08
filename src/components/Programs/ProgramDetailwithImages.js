import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import ProgramDetailHero from '../common/ProgramDetailHero';
import GoBackLink from '../common/GoBackLink';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDetailsForProgramById } from '../redux/actions/Actions';
import {LIVE_IMG_URL, DUMMY_URL} from '../../data/constants'

const ProgramDetailwithImages = () => {
  const getDetailProgram = useSelector((state)=> state.loadImageCourseForProgramDetail.imageCourseForProgramDetail)
  const { id } = useParams();
  const dispatch = useDispatch()
  
    const [imagesAWS, setImagesAWS] = useState([]);   

    useEffect(() => {
        setImagesAWS(getDetailProgram)
        dispatch(getAllDetailsForProgramById(id))
    }, [dispatch,getDetailProgram]);

    
    const selectedProgram = imagesAWS[0]
    
    //console.log('images',imagesAWS)

    const imgURL = LIVE_IMG_URL;

  return (
    <div className='programdetail-wrapper'>
      <ProgramDetailHero programDetailData={selectedProgram}/>
      <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Details</h6>
                <h1 className="mb-5">{selectedProgram?.program_name}</h1>
            </div>
            <GoBackLink />
            
            <div className="row g-4">
            {
              imagesAWS.map((eachItem,index)=>(
                <div className="col-lg-3 col-md-6 wow fadeInUp courseslist-wrapper" data-wow-delay="0.3s" key={index}>
                    <div className="team-item h-100">
                        <div className="hover-container">
                        <img className="img-fluid" src={`${imgURL}/${eachItem.file_path}/${eachItem.file_name}`} alt={`${imgURL}/${eachItem.file_path}/${eachItem.file_name}`} />
                        <div className="course-overlay">
                        <Link className="btn btn-lg btn-warning mx-1 overlay-hover-btn" to={`/courses/${eachItem.course_id}`} >Explore</Link>
                        </div>
                      </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">{eachItem.course_name}</h5>
                        </div>
                    </div>
                </div>
              ))
            }
                
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default ProgramDetailwithImages