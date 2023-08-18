// authReducer.js

import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
  } from './authTypes';
  
  const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
    token: null
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          error: null,
        };
      case REGISTER_FAILURE:
      case LOGIN_FAILURE:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          error: action.payload,
        };
      case LOGOUT:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  