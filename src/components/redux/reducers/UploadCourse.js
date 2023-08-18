import { ActionTypes } from "../constants/action-types"

const initialState = {
    newCourse:[]

}

export const UploadCourse = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.UPLOAD_COURSE: 
    return {...state, newCourse: payload}
    default: return state
}

}