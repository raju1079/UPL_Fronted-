import { ActionTypes } from "../constants/action-types"

const initialState = {
    updateProgram:[]

}

export const UpdateProgramReducer = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.EDIT_PROGRAM: 
    return {...state, updateProgram: payload}
    default: return state
}

}