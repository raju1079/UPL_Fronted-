import { ActionTypes } from "../constants/action-types"

const initialState = {
    updateUser:[]

}

export const UpdateUserReducer = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.UPDATE_USER: 
    return {...state, updateUser: payload}
    default: return state
}

}