import { ActionTypes } from "../constants/action-types"

const initialState = {
    courseWithLesson:[]

}

export const GetCourseWithLesson = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.GET_COURSE_WITH_LESSON: 
    return {...state, courseWithLesson: payload}
    
    default: return state
}

}