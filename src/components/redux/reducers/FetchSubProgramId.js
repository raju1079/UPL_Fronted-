import { ActionTypes } from "../constants/action-types"

const initialState = {
  subprogramId: []
}

const FetchSubProgramId = (state=initialState, {type, payload})=>{
    switch(type){
        case ActionTypes.FETCH_SUBPROGRAM_ID : return {...state, 
            subprogramId: payload}           
        default: return state;
    }
    
}


export default FetchSubProgramId;