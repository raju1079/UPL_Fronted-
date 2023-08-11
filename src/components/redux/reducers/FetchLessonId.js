import { ActionTypes } from "../constants/action-types"

const initialState = {
  lessonsId: []
}

const FetchLessonId = (state=initialState, {type, payload})=>{
    switch(type){
        case ActionTypes.FETCH_LESSON_ID : return {...state, 
            coursesId: payload}           
        default: return state;
    }
    
}


export default FetchLessonId;