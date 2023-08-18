import { ActionTypes } from "../constants/action-types"

const initialState = {
    imageCourse:[]

}

export const GetImageCourse = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.GET_IMAGE_COURSE: 
    return {...state, imageCourse: payload}
    
    default: return state
}

}