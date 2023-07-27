import { ActionTypes } from "../constants/action-types"

const initialState = {
    prerequisiteByCourse:[]

}

export const GetPrequisiteByCourse = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.GET_PREREQUISITE_BY_COURSE: 
    return {...state, prerequisiteByCourse: payload}
    
    default: return state
}

}