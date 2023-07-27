import { ActionTypes } from "../constants/action-types"

const initialState = {
    lessonsByCourse:[]

}

export const GetLessonByCourseId = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.GET_LESSONS_BY_COURSE_ID: 
    return {...state, lessonsByCourse: payload}
    
    default: return state
}

}