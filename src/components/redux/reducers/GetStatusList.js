import { ActionTypes } from "../constants/action-types"

const initialState = {
    statusList:[]

}

export const GetStatusList = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.GET_STATUS_LIST: 
    return {...state, statusList: payload}
    default: return state
}

}