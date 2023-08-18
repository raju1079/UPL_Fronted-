import { ActionTypes } from "../constants/action-types"

const initialState = {
  visitorById: []
}

const GetVisitorById = (state=initialState, {type, payload})=>{
    switch(type){
        case ActionTypes.GET_VISITORS_BY_ID : return {...state, 
            visitorById: payload}           
        default: return state;
    }
    
}


export default GetVisitorById;