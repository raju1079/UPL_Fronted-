import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import SubHero from '../common/SubHero'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseWithLesson, fetchCoursesById, fetchLessonByCourseId, fetchPrerequisiteByCourse } from '../redux/actions/Actions';
import GoBackLink from '../common/GoBackLink';
import CourseHero from '../common/CourseHero';
import Prerequisite from './Prerequisite';
import PlayButton from './PlayButton';
import Lessons from './Lessons';
import { ArrowDownward, ArrowRight } from '@mui/icons-material';
import { Button } from 'react-bootstrap';
import ProjectButtons from './ProjectButtons';
import LessonCommonMessage from './LessonCommonMessage';
import PrerequisiteCommon from './PrerequisiteCommon';

const CourseDetail = (props) => {
    const { id } = useParams()
    const location = useLocation()
    const [programInterested, setProgramInterested] = useState(location.state?.interestedProgram)
    const fetchCourseById = useSelector((state)=> state.fetchCourseById.courseById)
    const fetchCourseWithLessonNunit = useSelector((state)=> state.getCourseWithLesson.courseWithLesson)
    const prerequisitesByCourse = useSelector((state)=> state.getPrerequisiteByCourse.prerequisiteByCourse)
    const lessonsByCourseId = useSelector((state)=> state.getLessonsByCourseId.lessonsByCourse)
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
      dispatch(fetchCourseWithLesson(id))
      dispatch(fetchPrerequisiteByCourse(id))
      dispatch(fetchLessonByCourseId(id))
      props.setBgColor('linear-gradient(to right, #FFF4B0, #FFB2F0)')
      return () => {
        props.setBgColor('')
    }
    }, [dispatch,props,fetchCourseById])
    //console.log("Course Details", fetchCourseById)
    const selectedCourse = fetchCourseById[0]
    const interestedCourse = selectedCourse?.course_name
    const interestedCourseId = selectedCourse?.course_id
    //console.log('course with l N u', fetchCourseWithLessonNunit)
   // console.log('prerequsite',prerequisitesByCourse)
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
                {
                  (prerequisitesByCourse.length === 0) ?  
                  <PrerequisiteCommon data={selectedCourse}  /> :
                  <Prerequisite prerequisiteData={prerequisitesByCourse} />
                }
                
                <div className='heading-box'>
                    <h3>What you will be Learning</h3>
                </div>
                
                {
                  (fetchCourseWithLessonNunit.length === 0) ? 
                  <LessonCommonMessage data={selectedCourse} onDownload={onDownload} /> : 
                  <Lessons
                lessonNunits={fetchCourseWithLessonNunit}
                lessonsByCourseId={lessonsByCourseId}
                 />
                }
                                
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
