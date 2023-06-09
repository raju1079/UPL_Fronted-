import { ActionTypes } from "../constants/action-types"

const initialState = {
  programById: []
}

const FetchProgramById = (state=initialState, {type, payload})=>{
    switch(type){
        case ActionTypes.FETCH_PROGRAM_BY_ID : return {...state, 
            programById: payload}           
        default: return state;
    }
    
}


export default FetchProgramById;