import { ActionTypes } from "../constants/action-types"

const initialState = {
    updateCourse:[]

}

export const UpdateCourseReducer = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.EDIT_COURSE: 
    return {...state, updateCourse: payload}
    default: return state
}

}