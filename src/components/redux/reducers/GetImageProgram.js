import { ActionTypes } from "../constants/action-types"

const initialState = {
    imageProgram:[]

}

export const GetImageProgram = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.GET_IMAGE_PROGRAM: 
    return {...state, imageProgram: payload}
    
    default: return state
}

}