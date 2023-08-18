import { ActionTypes } from "../constants/action-types"

const initialState = {
    makeCategory:[]

}

export const CreateProgramCourse = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.CREATE_PROGRAMCOURSE: 
    return {...state, makeCategory: payload}
    default: return state
}

}