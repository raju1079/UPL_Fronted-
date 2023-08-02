import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseList, fetchProgramById, fetchProgramId } from '../redux/actions/Actions';
import GoBackLink from '../common/GoBackLink';
import ProgramDetailHero from '../common/ProgramDetailHero';
import IconButton from '@mui/material/IconButton';

const ExpandMore = styled((props) => {
    
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProgramDetail = () => {
  const fetchProgramsById = useSelector((state)=> state.fectchProgramById.programById)
  const fetchProgramsdetail = useSelector((state)=> state.getProgramsId.programsId)
  const fetchCourses = useSelector((state)=> state.fetchAllCourses.courses)
  const dispatch = useDispatch()
    const { id } = useParams()
    const navigate = useNavigate()
    const [courses,setCourses] = useState([])

    const [item, setItem] = useState([]);

    useEffect(()=>{
      dispatch(fetchProgramById(id))
      dispatch(fetchCourseList())
      dispatch(fetchProgramId(id))
   },  [dispatch,id])
   //console.log('selected Program name by id is', fetchProgramsById)
   //console.log("courses list for selected course code is", courses)
   console.log('program details id is', fetchProgramsdetail)
   //const selectedProgram = fetchProgramsById[0]
   const selectedProgram = fetchProgramsdetail[0]
   const interestedProgram = selectedProgram?.program_name
   const interestedProgramId = selectedProgram?.program_id
   const interestedProgramBenefits = selectedProgram?.program_benefits

   useEffect(()=>{
    setItem(fetchProgramsById)
   }, [item,fetchProgramsById])

   //console.log("new", interestedProgram)

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
              item.map((eachItem,index)=>(
                <div className="col-lg-3 col-md-6 wow fadeInUp courseslist-wrapper" data-wow-delay="0.3s" key={index}>
                    <div className="team-item h-100">
                        {/* <div className="overflow-hidden coursename">
                        <img className="img-fluid" src={`/img/courses/${selectedProgram?.program_name}/${eachItem.course_name.replaceAll(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")}.png`} alt={eachItem.course_name.replaceAll(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")} />
                        </div> */}
                        <div className="hover-container">
                        <img className="img-fluid" src={`/img/courses/${selectedProgram?.program_name}/${eachItem.course_name.replaceAll(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")}.png`} alt={eachItem.course_name.replaceAll(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")} />
                        <div className="course-overlay">
                        <Link className="btn btn-lg btn-warning mx-1 overlay-hover-btn" to={`/courses/${eachItem.course_id}`} state={{interestedProgram,interestedProgramBenefits,interestedProgramId}}>Explore</Link>
                        </div>
                      </div>
                        {/* <div className="position-relative d-flex justify-content-center" style={{marginTop: "-23px"}}>
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <Link className="btn btn-sm-square btn-primary mx-1" to={`/courses/${eachItem.course_id}`} state={{interestedProgram}}><i className="fab fa-readme"></i></Link>
                                 <Link className="btn btn-sm-square btn-primary mx-1" to={"/registerform"}><i className="fab fa-dochub"></i></Link>
                            </div>
                        </div> */}
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

export default ProgramDetail
