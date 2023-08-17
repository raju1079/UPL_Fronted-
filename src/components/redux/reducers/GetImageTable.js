import { ActionTypes } from "../constants/action-types"

const initialState = {
    imageTable:[]

}

export const GetImageTable = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.GET_IMAGE_TABLE: 
    return {...state, imageTable: payload}
    
    default: return state
}

}