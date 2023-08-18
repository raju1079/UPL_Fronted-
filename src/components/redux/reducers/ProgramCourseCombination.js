import { ActionTypes } from "../constants/action-types"

const initialState = {
    programCourseCombination:''

}

export const ProgramCourseCombination = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.GET_PROGRAM_COURSE_COMBINATION: 
    return {...state, programCourseCombination: payload}
    
    default: return state
}

}