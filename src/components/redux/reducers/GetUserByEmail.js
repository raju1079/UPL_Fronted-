import { ActionTypes } from "../constants/action-types"

const initialState = {
  userByEmail: []
}

const GetUserByEmail = (state=initialState, {type, payload})=>{
    switch(type){
        case ActionTypes.GET_USER_BY_EMAIL : return {...state, 
            userByEmail: payload}           
        default: return state;
    }
    
}


export default GetUserByEmail;