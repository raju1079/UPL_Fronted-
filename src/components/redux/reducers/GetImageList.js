import { ActionTypes } from "../constants/action-types"

const initialState = {
    imageList:[]

}

export const GetImageList = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.GET_IMAGE_LIST: 
    return {...state, imageList: payload}
    
    default: return state
}

}