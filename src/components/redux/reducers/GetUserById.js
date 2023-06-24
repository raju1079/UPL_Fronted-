import { ActionTypes } from "../constants/action-types"

const initialState = {
  userById: []
}

const GetUserById = (state=initialState, {type, payload})=>{
    switch(type){
        case ActionTypes.GET_USER_BY_ID : return {...state, 
            userById: payload}           
        default: return state;
    }
    
}


export default GetUserById;