import { ActionTypes } from "../constants/action-types"

const initialState = {
    allUsers:[]

}

export const GetUsers = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.GET_ALL_USERS: 
    return {...state, allUsers: payload}
    default: return state
}

}