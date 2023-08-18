import { ActionTypes } from "../constants/action-types"

const initialState = {
    uploadNewImage:[]

}

export const UploadImage = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.UPLOAD_IMAGE: 
    return {...state, uploadNewImage: payload}
    default: return state
}

}