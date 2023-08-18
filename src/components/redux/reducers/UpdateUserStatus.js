import { ActionTypes } from "../constants/action-types"

const initialState = {
    updateUserStatus:''

}

export const UpdateUserStatus = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.UPDATE_STATUS: 
    return {...state, updateUserStatus: payload}
    default: return state
}

}