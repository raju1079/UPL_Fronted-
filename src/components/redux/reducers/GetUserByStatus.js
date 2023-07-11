import { ActionTypes } from "../constants/action-types"

const initialState = {
  userByStatus: []
}

const GetUserByStatus = (state=initialState, {type, payload})=>{
    switch(type){
        case ActionTypes.GET_USER_BY_STATUS : return {...state, 
            userByStatus: payload}           
        default: return state;
    }
    
}


export default GetUserByStatus;