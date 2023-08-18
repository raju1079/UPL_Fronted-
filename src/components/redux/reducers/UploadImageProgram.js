import { ActionTypes } from "../constants/action-types"

const initialState = {
    uploadNewImageProgram:[]

}

export const UploadImageProgram = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.UPLOAD_IMAGE_PROGRAM: 
    return {...state, uploadNewImageProgram: payload}
    default: return state
}

}