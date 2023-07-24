import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import SubHero from '../common/SubHero'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoursesById } from '../redux/actions/Actions';
import GoBackLink from '../common/GoBackLink';
import CourseHero from '../common/CourseHero';
import Prerequisite from './Prerequisite';
import PlayButton from './PlayButton';
import Lessons from './Lessons';
import { ArrowDownward, ArrowRight } from '@mui/icons-material';
import { Button } from 'react-bootstrap';
import ProjectButtons from './ProjectButtons';

const CourseDetail = (props) => {
    const { id } = useParams()
    const location = useLocation()
    const [programInterested, setProgramInterested] = useState(location.state?.interestedProgram)
    const fetchCourseById = useSelector((state)=> state.fetchCourseById.courseById)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //console.log("course id", id)

    const onDownload = () => {
      //navigate('/download')
      //navigate('/download', {state: {interestedCourse, programInterested}})
      navigate('/download', {state: {interestedCourseId,programInterested,interestedCourse}})
    };

    useEffect(()=>{
      dispatch(fetchCoursesById(id))
      props.setBgColor('linear-gradient(to right, #FFF4B0, #FFB2F0)')
      return () => {
        props.setBgColor('')
    }
    }, [props])
    //console.log("Course Details", fetchCourseById)
    const selectedCourse = fetchCourseById[0]
    const interestedCourse = selectedCourse?.course_name
    const interestedCourseId = selectedCourse?.course_id
    //console.log("interestedCourse Details", interestedCourse + programInterested)

  return (
    <>
      <div className='course-bg-gradient'>
      <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                {/* <h6 className="section-title bg-white text-center text-primary px-3">Details</h6> */}
                <h1 className="mb-5 courseTitle">
                  <Link onClick={()=>navigate(-1)}>{programInterested} </Link>
                  <ArrowRight /> {selectedCourse?.course_name}
                </h1>
            </div>
            {/* <GoBackLink /> */}
            <div className=''>
              <button className="btn btn-primary py-2 mx-3 top-0 end-0 mt-2 me-2" onClick={onDownload}>Download Syllabus</button>
                <Prerequisite />
                <div className='heading-box'>
                    <h3>What you will be Learning</h3>
                </div>
                {/* <div className="pageheadingWrap mt-5">
                        <h3 className="pageheading">What you will be Learning</h3>
                </div> */}
                <Lessons data={selectedCourse} />
                <div className='heading-box'>
                    <h3>&nbsp;</h3>
                </div>
                <ProjectButtons buttonName={"Capstone Project"} />
                
                <ProjectButtons buttonName={"Live Project"} />
            </div>
            </div>
    </div>
      </div>
      <PlayButton />
    </>
  )
}

export default CourseDetail
