import { ActionTypes } from "../constants/action-types"

const initialState = {
    units:[]

}

export const GetUnits = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.GET_UNITS: 
    return {...state, units: payload}
    /* case ActionTypes.DELETE_PROGRAM:
         return {
           ...state,
           programs: state.programs.filter((item, index) => index !== payload)
         } */
    default: return state
}

}