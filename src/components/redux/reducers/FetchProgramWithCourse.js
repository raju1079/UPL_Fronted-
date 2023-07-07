import { ActionTypes } from "../constants/action-types"

const initialState = {
    programswithCourses:[]

}

export const FetchProgramWithCourse = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.FETCH_PROGRAMS_WITH_COURSE: 
    return {...state, programswithCourses: payload}
    
    default: return state
}

}