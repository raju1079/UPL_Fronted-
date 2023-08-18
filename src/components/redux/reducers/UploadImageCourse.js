import { ActionTypes } from "../constants/action-types"

const initialState = {
    uploadNewImageCourse:[]

}

export const UploadImageCourse = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.UPLOAD_IMAGE_COURSE: 
    return {...state, uploadNewImageCourse: payload}
    default: return state
}

}