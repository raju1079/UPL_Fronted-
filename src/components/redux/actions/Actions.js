import { ActionTypes } from "../constants/action-types"
import axiosinstance from '../../../api/axiosinstance'
import axios from "axios"
import securedInstance from "../../../api/securedInstance"

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
   
    const response = await axiosinstance.get(`/api/category/all/${id}`)
    .then((res)=>{   
        const listData = res.data
       // console.log("programs selected", listData)
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
   
    const response = await securedInstance.get('/api/visitor' )
    .then((res)=>{   
        const listData = res.data
        const sortedData = listData.sort((a,b)=> b.user_id - a.user_id)
       //console.log("programs loaded", sortedData)
        return sortedData;
    })
    dispatch({
        type: ActionTypes.GET_VISITORS,
        payload: response
    })  
    
}
  export const getVisitorById = (id) =>async (dispatch)=>{
   
    const response = await securedInstance.get(`/api/visitor/${id}` )
    .then((res)=>{   
        const listData = res.data
       //console.log("selected user data", listData)
        return listData;
    })
    dispatch({
        type: ActionTypes.GET_VISITORS_BY_ID,
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
/* GET All Users */
export const getUsersList = () =>async (dispatch)=>{
   
    const response = await securedInstance.get('/api/allUsers' )
    .then((res)=>{   
        const listData = res.data
        const sortedData = listData.sort((a,b)=> b.user_id - a.user_id)
      // console.log("programs loaded", sortedData)
        return sortedData;
    })
    dispatch({
        type: ActionTypes.GET_ALL_USERS,
        payload: response
    })  
    
}

//get user by id
export const getUserById = (id) =>async (dispatch)=>{
   
    const response = await securedInstance.get(`/api/allUsers/${id}` )
    .then((res)=>{   
        const listData = res.data
       //console.log("selected user data", listData)
        return listData;
    })
    dispatch({
        type: ActionTypes.GET_USER_BY_ID,
        payload: response
    })  
    
}

/* update user */
export const updateUserById = (updatedUserData, id) => async (dispatch) => {
    
    try {
        const response = await securedInstance.put(`/api/allUsers/${id}`, updatedUserData)
        .then((res)=>{   
            const listData = res.data
          // console.log("user loaded", listData)
            return listData;
        })
        dispatch({
            type: ActionTypes.UPDATE_USER,
            payload: response
        }) 
    } catch (error) {
      console.log(error)
    }
  };

  /* delete User by id */
  export const deleteUserById = (id) => async (dispatch) => {    
    try {
        const response = await securedInstance.delete(`/api/allUsers/${id}`)
        .then((res)=>{
           console.log(`User deleted with Id:${id}`)            
        })
        dispatch({
            type: ActionTypes.DELETE_USER,
            payload: response
        }) 
    } catch (error) {
      console.log(error)
    }
  };

//Upload new program
export const uploadNewProgram = (newProgramData) => async (dispatch) => {
    
    try {
        const response = await securedInstance.post('/api/program', newProgramData)
        .then((res)=>{   
            const listData = res.data
          // console.log("programs loaded", listData)
            return listData;
        })
        dispatch({
            type: ActionTypes.UPLOAD_PROGRAM,
            payload: response
        }) 
    } catch (error) {
      console.log(error)
    }
  };
//update  program
export const updateProgramById = (updatedProgramData, id) => async (dispatch) => {
    
    try {
        const response = await securedInstance.put(`/api/program/${id}`, updatedProgramData)
        .then((res)=>{   
            const listData = res.data
          // console.log("programs loaded", listData)
            return listData;
        })
        dispatch({
            type: ActionTypes.EDIT_PROGRAM,
            payload: response
        }) 
    } catch (error) {
      console.log(error)
    }
  };
//delete a program
export const deleteProgramById = (id) => async (dispatch) => {    
    try {
        const response = await securedInstance.delete(`/api/program/${id}`)
        .then((res)=>{
           console.log(`Program deleted with Id:${id}`)            
        })
        dispatch({
            type: ActionTypes.DELETE_PROGRAM,
            payload: response
        }) 
    } catch (error) {
      console.log(error)
    }
  };