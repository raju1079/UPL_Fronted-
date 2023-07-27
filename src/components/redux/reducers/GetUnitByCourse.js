import { ActionTypes } from "../constants/action-types"

const initialState = {
    unitByCourse:[]

}

export const GetUnitByCourse = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.GET_UNIT_BY_COURSE: 
    return {...state, unitByCourse: payload}
    
    default: return state
}

}