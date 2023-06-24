import { ActionTypes } from "../constants/action-types"

const initialState = {
    programs:[]

}

export const FetchPrograms = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.FETCH_PROGRAMS: 
    return {...state, programs: payload}
    case ActionTypes.DELETE_PROGRAM:
         return {
           ...state,
           programs: state.programs.filter((item, index) => index !== payload)
         }
    default: return state
}

}