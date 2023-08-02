import { ActionTypes } from "../constants/action-types"

const initialState = {
    subscribersWithProgram:[]
}

export const GetSubscriberList = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.GET_ALL_SUBSCRIBER: 
    return {...state, subscribersWithProgram: payload}

    case ActionTypes.DELETE_SUBSCRIBER:
         return {
           ...state,
           subscribersWithProgram: state.subscribersWithProgram.filter((item, index) => index !== payload)
         }

    default: return state
}

}