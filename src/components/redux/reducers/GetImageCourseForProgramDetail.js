import { ActionTypes } from "../constants/action-types"

const initialState = {
    imageCourseForProgramDetail:[]

}

export const GetImageCourseForProgramDetail = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.GET_IMGAGE_COURSE_FOR_PROGRAMDETAIL: 
    return {...state, imageCourseForProgramDetail: payload}
    
    default: return state
}

}