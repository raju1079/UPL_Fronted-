import axiosinstance from '../../../api/axiosinstance'
import { toast } from "react-toastify"
// authActions.js

import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './authTypes';
import securedInstance from '../../../api/securedInstance';

// Register user
export const register = (userData) => async (dispatch) => {
  
  const headers = {
    'Content-Type': 'application/json',
    };
  try {
    const res = await axiosinstance.post('/api/auth/register', userData,{headers});
  dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    //console.log('Registered As',res.config.data);
    toast.success("You have Registered Successfully")
  } catch (error) {
    toast.error(error.response.data.error + " "+ 'Please TRY again')
    dispatch({
      type: REGISTER_FAILURE,
      payload: error.response.data.error,
    });
  }
};

// Login user
export const login = (userData) => async (dispatch) => {
   try {
    const res = await securedInstance.post('/api/auth/login', userData);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    console.log('Logged in As',res.data);
    toast.success("You have successfully LoggedIn")
  } catch (error) {
    console.log('Message',error.response.data)
    toast.error(error.response.data.error)
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response.data.error,
    });
  }
};

// Logout user
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
