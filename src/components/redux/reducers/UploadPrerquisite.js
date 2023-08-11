import { ActionTypes } from "../constants/action-types"

const initialState = {
    newPrerequisite:[]

}

export const UploadPrerquisite = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.UPLOAD_PREREQUISITE: 
    return {...state, newLesson: payload}
    default: return state
}

}