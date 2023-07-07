import { ActionTypes } from "../constants/action-types"

const initialState = {
  programsId: []
}

const FetchProgramId = (state=initialState, {type, payload})=>{
    switch(type){
        case ActionTypes.FETCH_PROGRAM_ID : return {...state, 
            programsId: payload}           
        default: return state;
    }
    
}


export default FetchProgramId;