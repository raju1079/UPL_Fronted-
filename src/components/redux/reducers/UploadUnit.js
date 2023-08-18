import { ActionTypes } from "../constants/action-types"

const initialState = {
    newUnit:[]

}

export const UploadUnit = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.UPLOAD_UNIT: 
    return {...state, newLesson: payload}
    default: return state
}

}