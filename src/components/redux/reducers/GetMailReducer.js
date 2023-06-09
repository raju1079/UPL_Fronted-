import { ActionTypes } from "../constants/action-types"

const initialState = {
  mailId: ""
}

const GetMailReducer = (state=initialState, {type, payload})=>{
    switch(type){
        case ActionTypes.GET_MAIL_DOWNLOAD : return {...state, 
            mailId: payload}           
        default: return state;
    }
    
}


export default GetMailReducer;