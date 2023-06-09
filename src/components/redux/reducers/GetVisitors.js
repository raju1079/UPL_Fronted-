import { ActionTypes } from "../constants/action-types"

const initialState = {
    visitors:[]

}

export const GetVisitors = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.GET_VISITORS: 
    return {...state, visitors: payload}
    default: return state
}

}