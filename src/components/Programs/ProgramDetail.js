import { styled } from '@mui/material/styles';
import { Avatar, Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, List, ListItem, Paper, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, } from 'react-router-dom'
import jsondata from '../../data/data.json'
import SubHero from '../common/SubHero';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseList, fetchProgramById, fetchProgramList } from '../redux/actions/Actions';
import { Assignment, Folder } from '@mui/icons-material';

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
  const fetchCourses = useSelector((state)=> state.fetchAllCourses.courses)
  const dispatch = useDispatch()
    const { id } = useParams()
    const navigate = useNavigate()
    const [courses,setCourses] = useState('')

    const [item, setItem] = useState([]);

    useEffect(() => {
        setItem(jsondata.Programs[id-1])
        setCourses(item.courses)
    }, [item]);
    const result = courses?.split(',')
    //console.log('selected course by id',item);
    //console.log('courses list', result)
    useEffect(()=>{
      dispatch(fetchProgramById(id))
      dispatch(fetchCourseList())
   },  [dispatch,id])
   //console.log('selected course name by id is', fetchProgramsById)
   //console.log("courses list for selected Program code is", fetchCourses)
   const selectedProgram = fetchProgramsById[0]

  return (
    <div className=''>
      <SubHero />
      <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Details</h6>
                <h1 className="mb-5">{selectedProgram?.program_name}</h1>
            </div>
            <div className='row'>
            <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col" colSpan={3}>Details of the program</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Category</th>
              <td>{selectedProgram?.category}</td>
              
            </tr>
            <tr>
              <th scope="row">Target Audience</th>
              <td>{selectedProgram?.target_audience}</td>
              
            </tr>
            <tr>
              <th scope="row">Cost</th>
              <td>{selectedProgram?.cost}</td>
            </tr>
            <tr>
              <th scope="row">Course Coverage</th>
              <td>{selectedProgram?.program_coverage}</td>
            </tr>
            <tr>
              <th scope="row">Outcome</th>
              <td>{selectedProgram?.outcome}</td>
            </tr>
            <tr>
              <th scope="row">Career Opportunities</th>
              <td>{selectedProgram?.career_opportunities}</td>
            </tr>
          </tbody>
        </table>
            </div>
            <div className="row g-4">
            {
              fetchCourses.map((eachItem)=>(
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s" key={eachItem.course_id}>
                    <div className="team-item bg-light">
                        <div className="overflow-hidden coursename">
                            {/* <img className="img-fluid" src='/img/courses/frontenddeveloperin(reactorangular).png' alt={eachItem.course_name.replaceAll(" ", "")} /> */}
                            <Avatar variant='square' >
                            <Folder />
                            </Avatar>
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{marginTop: "-23px"}}>
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <Link className="btn btn-sm-square btn-primary mx-1" to={`/courses/${eachItem.course_id}`}><i className="fab fa-readme"></i></Link>
                                 <Link className="btn btn-sm-square btn-primary mx-1" to={"/registerform"}><i className="fab fa-dochub"></i></Link>
                               {/* <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a> */}
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">{eachItem.course_name}</h5>
                           {/*  <small>Designation</small> */}
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
