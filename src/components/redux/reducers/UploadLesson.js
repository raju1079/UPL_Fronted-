import { ActionTypes } from "../constants/action-types"

const initialState = {
    newLesson:[]

}

export const UploadLesson = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.UPLOAD_LESSON: 
    return {...state, newLesson: payload}
    default: return state
}

}