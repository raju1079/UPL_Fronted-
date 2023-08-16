import { ActionTypes } from "../constants/action-types"

const initialState = {
    emailNotify:[]

}

export const SendEmail = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.SEND_EMAIL_NOTIFICATION: 
    return {...state, emailNotify: payload}
    default: return state
}

}