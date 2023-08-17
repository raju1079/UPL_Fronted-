import { ActionTypes } from "../constants/action-types"
import axiosinstance from '../../../api/axiosinstance'
import axios from "axios"
import securedInstance from "../../../api/securedInstance"
import { toast } from "react-toastify"

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
export const fetchProgramId = (id) =>async (dispatch)=>{
   
    const response = await axiosinstance.get(`/api/program/${id}`)
    .then((res)=>{   
        const listData = res.data
       // console.log("programs selected", listData)
        return listData;
    })
    //console.log("test")
    dispatch({
        type: ActionTypes.FETCH_PROGRAM_ID,
        payload: response
    })  
    
}
/* GET PROGRAM BY ID */
export const fetchSubProgramId = (id) =>async (dispatch)=>{
   
    const response = await axiosinstance.get(`/api/subprogram/programid/${id}`)
    .then((res)=>{   
        const listData = res.data
        console.log("subprograms selected", listData)
        return listData;
    })
    dispatch({
        type: ActionTypes.FETCH_SUBPROGRAM_ID,
        payload: response
    })  
    
}
/* GET PROGRAM BY ID from programCourseLinking */
export const fetchProgramswithCourses = () =>async (dispatch)=>{
   
    const response = await axiosinstance.get(`/api/category/all/`)
    .then((res)=>{   
        const listData = res.data
       // console.log("programs selected", listData)
        return listData;
    })
    //console.log("test")
    dispatch({
        type: ActionTypes.FETCH_PROGRAMS_WITH_COURSE,
        payload: response
    })  
    
}
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
export const getEmailId = (userData) => async (dispatch) => {
    try {
      const res = await axiosinstance.post('/api/download', userData);
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
   
   try{
    const response = await securedInstance.get('/api/visitor/visitorRoleProgram' )
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
   }  catch(err){
    console.log(err)
   }
    
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
  export const getVisitorByStatus = (status) =>async (dispatch)=>{
   
    const response = await securedInstance.get(`/api/visitor/visitorByStatus/${status}` )
    .then((res)=>{   
        const listData = res.data
       //console.log("selected user data", listData)
        return listData;
    })
    dispatch({
        type: ActionTypes.GET_VISITORS_BY_STATUS,
        payload: response
    })  
    
}
//Update Visitor status
export const updateVisitorStatusById = (updatedStatus, id) => async (dispatch) => {
    
    try {
        const response = await securedInstance.put(`/api/visitor/${id}/status`, updatedStatus)
        .then((res)=>{   
            const listData = res.data
          // console.log("user loaded", listData)
            return listData;
        })
        dispatch({
            type: ActionTypes.UPDATE_STATUS,
            payload: response
        }) 
    } catch (error) {
      console.log(error)
    }
  };
  /* GET STATUS lIST */
  export const getStatusList = () =>async (dispatch)=>{
   
    const response = await axiosinstance.get('/api/visitor/statusList' )
    .then((res)=>{   
        const listData = res.data
       //console.log("roles loaded", listData)
        return listData;
    })
    dispatch({
        type: ActionTypes.GET_STATUS_LIST,
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
   
    const response = await securedInstance.get('/api/allUsers/userRoleProgram' )
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
//get user by status
export const fetchUserByStatus = (status) =>async (dispatch)=>{
   
    const response = await securedInstance.get(`/api/allusers/userByStatus/${status}` )
    .then((res)=>{   
        const listData = res.data
       //console.log("selected user data", listData)
        return listData;
    })
    dispatch({
        type: ActionTypes.GET_USER_BY_STATUS,
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
/* update user */
export const updateUserStatusById = (updatedStatus, id) => async (dispatch) => {
    
    try {
        const response = await securedInstance.put(`/api/allUsers/${id}`, updatedStatus)
        .then((res)=>{   
            const listData = res.data
          // console.log("user loaded", listData)
            return listData;
        })
        dispatch({
            type: ActionTypes.UPDATE_STATUS,
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

  //get program course with program id and course id
  export const getProgramCourseCombo = (details) => async (dispatch) => {
    
    try {
        const response = await axiosinstance.post(`/api/category/combination/`, details)
        .then((res)=>{   
            const listData = res.data
          // console.log("user loaded", listData)
            return listData;
        })
        dispatch({
            type: ActionTypes.GET_PROGRAM_COURSE_COMBINATION,
            payload: response
        }) 
    } catch (error) {
      console.log(error)
    }
  };

  // subscriber register
  export const registerSubsciber = (userData) => async (dispatch) => {
    try {
      const res = await axiosinstance.post('/api/subscribers', userData);
      dispatch({
        type: ActionTypes.SUBSCRIBER_REGISTER,
        payload: res.data,
      });
      toast.success("You have submitted Successfully")
    } catch (error) {
      toast.error(error.response.data.error + " "+ 'Please TRY again')
    }
  };
/* GET All Users */
export const getAllSubscribers = () =>async (dispatch)=>{
   try{
    // to display subscriber with program name use api='subscriberWithProgram', subscriber with subprogram='subscriberWithSubProgram'
    const response = await securedInstance.get('/api/subscribers/subscriberWithSubProgram' )
    .then((res)=>{   
        const listData = res.data
        const sortedData = listData.sort((a,b)=> b.user_id - a.user_id)
      // console.log("programs loaded", sortedData)
        return sortedData;
    })
    dispatch({
        type: ActionTypes.GET_ALL_SUBSCRIBER,
        payload: response
    })  
   }catch(error){
    console.log(error)
   }
    
}
//delete 
export const deleteSubscriberById = (id) => async (dispatch) => {    
    try {
        const response = await securedInstance.delete(`/api/subscribers/${id}`)
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
  // GET lessons
  export const fetchLessons = () =>async (dispatch)=>{
   try{
    
    const response = await securedInstance.get('/api/lessons' )
    .then((res)=>{   
        const listData = res.data
        return listData;
    })
    dispatch({
        type: ActionTypes.GET_LESSONS,
        payload: response
    })  
   }catch(err){
    console.log(err)
   }
    
}
  // GET units
  export const fetchUnits = () =>async (dispatch)=>{
   
   try{
    const response = await securedInstance.get('/api/units' )
    .then((res)=>{   
        const listData = res.data
        return listData;
    })
    dispatch({
        type: ActionTypes.GET_UNITS,
        payload: response
    })  
   }catch(err){
    console.log(err)
   }
    
}
  // GET units per lessons
  export const fetchUnitsByLesson = (id) =>async (dispatch)=>{
   
    try{
        const response = await securedInstance.get(`/api/units/unitPerLes/${id}` )
    .then((res)=>{   
        const listData = res.data
        return listData;
    })
    dispatch({
        type: ActionTypes.GET_UNITS_BY_LESSON,
        payload: response
    })  
    }catch(err){
        console.log(err)
    }
    
}
  // GET course with lessons and units
  export const fetchCourseWithLesson = (id) =>async (dispatch)=>{
   
    try{
        const response = await securedInstance.get(`/api/lessons/course/${id}` )
    .then((res)=>{   
        const listData = res.data
        return listData;
    })
    dispatch({
        type: ActionTypes.GET_COURSE_WITH_LESSON,
        payload: response
    })  
    }catch(err){
        console.log(err)
    }
    
}

// GET prerequisitions BY courseID
export const fetchPrerequisiteByCourse = (id) =>async (dispatch)=>{
   
    try{
        const response = await securedInstance.get(`/api/prerequisites/fourByCourse/${id}` )
    .then((res)=>{   
        const listData = res.data
        return listData;
    })
    dispatch({
        type: ActionTypes.GET_PREREQUISITE_BY_COURSE,
        payload: response
    })  
    }catch(err){
        console.log(err)
    }
    
}

// GET course with lessons and units
export const fetchLessonByCourseId = (id) =>async (dispatch)=>{
   
    try{
        const response = await securedInstance.get(`/api/lessons/sixLessPerCourse/${id}` )
    .then((res)=>{   
        const listData = res.data
        return listData;
    })
    dispatch({
        type: ActionTypes.GET_LESSONS_BY_COURSE_ID,
        payload: response
    })  
    }catch(err){
        console.log(err)
    }
    
}
// GET ACTIVE PROMOTION FOR HOME PAGE HERO
export const getActivePromotionEvent = () =>async (dispatch)=>{
   
    try{
     const response = await axiosinstance.get('/api/promotions/active/event' )
     .then((res)=>{   
         const listData = res.data
         return listData;
     })
     dispatch({
         type: ActionTypes.GET_ACTIVE_PROMOTION_EVENT,
         payload: response
     })  
    }catch(err){
     console.log(err)
    }
     
 }

 //Upload new course
export const uploadNewCourse = (newCourseData) => async (dispatch) => {
    
    try {
        const response = await securedInstance.post('/api/courses', newCourseData)
        .then((res)=>{   
            const listData = res.data
          console.log("courses loaded", listData)
          toast.success("You have successfully uploaded course")  
            return listData;
        })
        dispatch({
            type: ActionTypes.UPLOAD_COURSE,
            payload: response
        }) 
    } catch (error) {
      console.log(error)
    }
  };

   //delete a course
export const deleteCourseById = (id) => async (dispatch) => {    
    try {
        const response = await securedInstance.delete(`/api/courses/${id}`)
        .then((res)=>{
           //console.log(`Course deleted with Id:${id}`)
           toast.success("You have successfully deleted course")            
        })
        dispatch({
            type: ActionTypes.DELETE_COURSE,
            payload: response
        }) 
    } catch (error) {
      console.log(error)
    }
  }; 

//update  course by id
export const updateCourseById = (updatedCourseData, id) => async (dispatch) => {
    
    try {
        const response = await securedInstance.put(`/api/courses/${id}`, updatedCourseData)
        .then((res)=>{   
            const listData = res.data
          // console.log("courses loaded", listData)
          toast.success("You have successfully updated course") 
            return listData;
        })
        dispatch({
            type: ActionTypes.EDIT_COURSE,
            payload: response
        }) 
    } catch (error) {
      console.log(error)
    }
  };


   //Upload new lesson
export const uploadNewLesson = (newLessonData) => async (dispatch) => {
    
    try {
        const response = await securedInstance.post('/api/lessons', newLessonData)
        .then((res)=>{   
            const listData = res.data
          console.log("lessons loaded", listData)
          toast.success("You have successfully uploaded lessons")  
            return listData;
        })
        dispatch({
            type: ActionTypes.UPLOAD_LESSON,
            payload: response
        }) 
    } catch (error) {
      console.log(error)
    }
  };

   //Upload new unit
export const uploadNewUnit = (newUnitData) => async (dispatch) => {
    
    try {
        const response = await securedInstance.post('/api/units', newUnitData)
        .then((res)=>{   
            const listData = res.data
          console.log("units loaded", listData)
          toast.success("You have successfully uploaded unit")  
            return listData;
        })
        dispatch({
            type: ActionTypes.UPLOAD_UNIT,
            payload: response
        }) 
    } catch (error) {
      console.log(error)
    }
  };

    /* GET Lesson BY ID */
export const fetchLessonId = (id) =>async (dispatch)=>{
   
    const response = await axiosinstance.get(`/api/lessons/${id}`)
    .then((res)=>{   
        const listData = res.data
       // console.log("lessons selected", listData)
        return listData;
    })
    //console.log("test")
    dispatch({
        type: ActionTypes.FETCH_LESSON_ID,
        payload: response
    })  
};

   //Upload new Prerequisite
   export const uploadNewPrerequisite = (newPrerequisiteData) => async (dispatch) => {
    
    try {
        const response = await securedInstance.post('/api/Prerequisites', newPrerequisiteData)
        .then((res)=>{   
            const listData = res.data
          console.log("units loaded", listData)
          toast.success("You have successfully uploaded Prerequisite")  
            return listData;
        })
        dispatch({
            type: ActionTypes.UPLOAD_PREREQUISITE,
            payload: response
        }) 
    } catch (error) {
      console.log(error)
    }
  };

  /* upload PROGRAMcourse - programCourseLinking */
export const createNewProgramCourse = (programImageData) =>async (dispatch)=>{
   
    try{
        const response = await securedInstance.post(`/api/category`,programImageData)
    .then((res)=>{   
        const listData = res.data
        console.log("response", listData)
        return listData;
    })
    //console.log("test")
    dispatch({
        type: ActionTypes.CREATE_PROGRAMCOURSE,
        payload: response
    })  
    }
    catch(error){
        console.log(error)
    }
    
}

//Upload new image
export const uploadNewImage = (imageData) => async (dispatch) => {

    const headers = {
      'Content-Type': 'multipart/form-data',
    };
       
    try {
        const response = await axiosinstance.post('/api/awsimage', imageData, {headers})
        .then((res)=>{   
            const listData = res.data
          console.log("units loaded", listData)
          toast.success("You have successfully uploaded")  
            return listData;
        })
        dispatch({
            type: ActionTypes.UPLOAD_IMAGE,
            payload: response
        }) 
    } catch (error) {
      console.log(error)
    }
  };

//   GET all images localed in images folder. from cloud folder: root directory 
export const getImagesList = () =>async (dispatch)=>{
   
    try{
        const response = await axiosinstance.get('/api/awsimage/list' )
    .then((res)=>{   
        const listData = res.data
       // console.log("images loaded", listData)
        return listData;
    })
    dispatch({
        type: ActionTypes.GET_IMAGE_LIST,
        payload: response
    })
    } catch(error){
        console.log(error)
    } 
    
}
// Get image list for admin panel. table with image name, program name and course name
export const getImagesTable = () =>async (dispatch)=>{
   
    try{
        const response = await axiosinstance.get('/api/awsimage/program' ) //controller: getAllImagesWithProgramName
    .then((res)=>{   
        const listData = res.data
       // console.log("images loaded", listData)
        return listData;
    })
    dispatch({
        type: ActionTypes.GET_IMAGE_TABLE,
        payload: response
    })
    } catch(error){
        console.log(error)
    } 
    
}
//   GET images for all programs page
export const getImageAllPrograms = () =>async (dispatch)=>{
   
    try{
        const response = await axiosinstance.get('/api/awsimage/category' )
    .then((res)=>{   
        const listData = res.data
       // console.log("images loaded", listData)
        return listData;
    })
    dispatch({
        type: ActionTypes.GET_IMAGE_PROGRAM,
        payload: response
    })
    } catch(error){
        console.log(error)
    } 
    
}
//   GET images,courses and program detail for program detail page - program by id
export const getAllDetailsForProgramById = (id) =>async (dispatch)=>{
   
    try{
        const response = await axiosinstance.get(`/api/category/detail/${id}` )
    .then((res)=>{   
        const listData = res.data
       // console.log("loaded", listData)
        return listData;
    })
    dispatch({
        type: ActionTypes.GET_IMGAGE_COURSE_FOR_PROGRAMDETAIL,
        payload: response
    })
    } catch(error){
        console.log(error)
    } 
    
}

//Upload new image
export const sendEmailNotification = (emailData) => async (dispatch) => {

    const headers = {
      'Content-Type': 'application/json',
    };
       
    try {
        const response = await axiosinstance.post('/api/email/send/1', emailData, {headers}) /* here 1 is email template modal. 1 0r 2 */
        .then((res)=>{   
            const listData = res.data
          console.log("submitted", listData)
            
            return listData;
        })
        dispatch({
            type: ActionTypes.SEND_EMAIL_NOTIFICATION,
            payload: response
        }) 
        toast.success(`Email successfully Sent to: ${emailData.emailId}`)
    } catch (error) {
      console.log(error)
    }
  };
  //get user by email to send mail notification - dispatch is commented in register page.
export const findUserByEmail = (registeredEmail) =>async (dispatch)=>{
   
    try{
        const response = await axiosinstance.get(`/api/allUsers/lastEmail/${registeredEmail}` )
    .then((res)=>{   
        const listData = res.data
       console.log("selected user data", listData)
        return listData;
    })
    dispatch({
        type: ActionTypes.GET_USER_BY_EMAIL,
        payload: response
    })  
    }catch(error){
        console.log(error)
    }
    
}