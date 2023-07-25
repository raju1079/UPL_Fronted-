import { ActionTypes } from "../constants/action-types"

const initialState = {
    lessons:[]

}

export const GetLessons = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.GET_LESSONS: 
    return {...state, lessons: payload}
    /* case ActionTypes.DELETE_PROGRAM:
         return {
           ...state,
           programs: state.programs.filter((item, index) => index !== payload)
         } */
    default: return state
}

}