import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SubHero from '../common/SubHero'
import ProgramCard from './ProgramCard'
import jsondata from '../../data/data.json'
import { useLocation } from 'react-router-dom'
import { fetchProgramList } from '../redux/actions/Actions';

const Programs = () => {
  const fetchPrograms = useSelector((state)=> state.fetchAllPrograms.programs)
    const location = useLocation()
const breadCrumb = location.pathname
const [programs, setPrograms] = useState([])
const dispatch = useDispatch()
  //console.log(location.pathname)
  useEffect(()=>{
    dispatch(fetchProgramList())
 },  [dispatch])

 
  
 console.log('programlist from db', fetchPrograms)
  //console.log('json ', programs)
  return (
    <>
    <SubHero />
    <ProgramCard data={fetchPrograms} />
    </>
  )
}

export default Programs
