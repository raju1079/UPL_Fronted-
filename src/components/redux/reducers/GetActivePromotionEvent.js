import { ActionTypes } from "../constants/action-types"

const initialState = {
    activePromotionEvent:[]

}

export const GetActivePromotionEvent = (state=initialState, {type, payload})=>{
switch (type){
    case ActionTypes.GET_ACTIVE_PROMOTION_EVENT: 
    return {...state, activePromotionEvent: payload}
    
    default: return state
}

}