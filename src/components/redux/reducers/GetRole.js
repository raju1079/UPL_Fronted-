import { ActionTypes } from "../constants/action-types"

const initialState = {
    roles:[]

}

export const GetRole = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.GET_ROLES: 
    return {...state, roles: payload}
    default: return state
}

}