import { ActionTypes } from "../constants/action-types"

const initialState = {
    newProgram:[]

}

export const UploadProgram = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.UPLOAD_PROGRAM: 
    return {...state, newProgram: payload}
    default: return state
}

}