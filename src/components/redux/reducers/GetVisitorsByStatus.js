import { ActionTypes } from "../constants/action-types"

const initialState = {
  visitorByStatus: []
}

const GetVisitorsByStatus = (state=initialState, {type, payload})=>{
    switch(type){
        case ActionTypes.GET_VISITORS_BY_STATUS : return {...state, 
            visitorByStatus: payload}           
        default: return state;
    }
    
}


export default GetVisitorsByStatus;