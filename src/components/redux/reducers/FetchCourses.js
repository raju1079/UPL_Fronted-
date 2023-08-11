import { ActionTypes } from "../constants/action-types"

const initialState = {
    courses:[]

}

export const FetchCourses = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.FETCH_COURSES: 
    return {...state, courses: payload}
    case ActionTypes.DELETE_COURSE:
        return {
          ...state,
          courses: state.courses.filter((item, index) => index !== payload)
        }
    default: return state
}

}