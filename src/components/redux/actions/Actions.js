import { ActionTypes } from "../constants/action-types"
import axiosinstance from '../../../api/axiosinstance'
import axios from "axios"

/* GET ALL PROGRAMS */
export const fetchProgramList = () =>async (dispatch)=>{
   
    const response = await axiosinstance.get('/api/program' )
    .then((res)=>{   
        const listData = res.data
       // console.log("programs loaded", listData)
        return listData;
    })
    //console.log("test")
    dispatch({
        type: ActionTypes.FETCH_PROGRAMS,
        payload: response
    })  
    
}
/* GET PROGRAM BY ID */
export const fetchProgramById = (id) =>async (dispatch)=>{
   
    const response = await axiosinstance.get(`/api/program/${id}`)
    .then((res)=>{   
        const listData = res.data
        console.log("programs selected", listData)
        return listData;
    })
    //console.log("test")
    dispatch({
        type: ActionTypes.FETCH_PROGRAM_BY_ID,
        payload: response
    })  
    
}
/* GET ALL COURSES BELONGS TO PROGRAM */
export const fetchCourseList = () =>async (dispatch)=>{
   
    const response = await axiosinstance.get('/api/courses' )
    .then((res)=>{   
        const listData = res.data
        //console.log("courses loaded", listData)
        return listData;
    })
    //console.log("test")
    dispatch({
        type: ActionTypes.FETCH_COURSES,
        payload: response
    })  
    
}
/* GET INDIVIDUAL COURSE DETAILS BY ID */
export const fetchCoursesById = (id) =>async (dispatch)=>{
   
    const response = await axiosinstance.get(`/api/courses/${id}`)
    .then((res)=>{   
        const listData = res.data
       // console.log("course selected", listData)
        return listData;
    })
    //console.log("test")
    dispatch({
        type: ActionTypes.FETCH_COURSE_BY_ID,
        payload: response
    })  
    
}
/* GET PORTION DOWNLOAD BY SENDING EMAIL ID */
export const getEmailId = (email) => async (dispatch) => {
    try {
      const res = await axiosinstance.post('/api/download', email);
      dispatch({
        type: ActionTypes.GET_MAIL_DOWNLOAD,
        payload: res.data,
      });
    } catch (error) {
      console.log(error)
    }
  };

  /* GET VISITORS */
  export const getVisitors = () =>async (dispatch)=>{
   
    const response = await axiosinstance.get('/api/visitor' )
    .then((res)=>{   
        const listData = res.data
       console.log("programs loaded", listData)
        return listData;
    })
    dispatch({
        type: ActionTypes.GET_VISITORS,
        payload: response
    })  
    
}
  /* GET ROLES */
  export const getRoles = () =>async (dispatch)=>{
   
    const response = await axiosinstance.get('/api/role' )
    .then((res)=>{   
        const listData = res.data
       //console.log("roles loaded", listData)
        return listData;
    })
    dispatch({
        type: ActionTypes.GET_ROLES,
        payload: response
    })  
    
}