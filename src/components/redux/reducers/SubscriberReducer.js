import { ActionTypes } from "../constants/action-types"

const initialState = {
    subscriber:[]

}

export const SubscriberReducer = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.SUBSCRIBER_REGISTER: 
    return {...state, subscriber: payload}
    default: return state
}

}