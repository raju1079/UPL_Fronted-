import { ActionTypes } from "../constants/action-types"

const initialState = {
    unitsByLesson:[]

}

export const GetUnitsByLesson = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.GET_UNITS_BY_LESSON: 
    return {...state, unitsByLesson: payload}
    
    default: return state
}

}