import { ActionTypes } from "../constants/action-types"

const initialState = {
  courseById: []
}

const FetchCourseById = (state=initialState, {type, payload})=>{
    switch(type){
        case ActionTypes.FETCH_COURSE_BY_ID : return {...state, 
            courseById: payload}           
        default: return state;
    }
    
}


export default FetchCourseById;